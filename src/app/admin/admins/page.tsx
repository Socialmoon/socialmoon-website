'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, UserPlus, Key } from 'lucide-react';

type Admin = {
  _id: string;
  username: string;
  role: 'admin' | 'superadmin';
  createdAt: string;
};

const AdminManagementPage = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState<'admin' | 'superadmin'>('admin');
  const [changeUsername, setChangeUsername] = useState('');
  const [changePasswordValue, setChangePasswordValue] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'superadmin'>('admin');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isChangeDialogOpen, setIsChangeDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState<'admin' | 'superadmin'>('admin');
  const router = useRouter();

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('adminToken')) {
      router.push('/admin/login');
      return;
    }
    const role = localStorage.getItem('adminRole') as 'admin' | 'superadmin' || 'admin';
    setCurrentUserRole(role);
    fetchAdmins();
  }, [router]);

  const fetchAdmins = async () => {
    try {
      const res = await fetch('/api/admins', {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setAdmins(data);
      }
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
    setLoading(false);
  };

  const addAdmin = async () => {
    if (!newUsername || !newPassword) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username: newUsername, password: newPassword, role: newRole }),
      });
      if (res.ok) {
        await fetchAdmins();
        setNewUsername('');
        setNewPassword('');
        setNewRole('admin');
        setIsAddDialogOpen(false);
      }
    } catch (error) {
      console.error('Error adding admin:', error);
    }
    setSaving(false);
  };

  const handleChangePassword = async () => {
    if (!changeUsername || !changePasswordValue) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username: changeUsername, newPassword: changePasswordValue }),
      });
      if (res.ok) {
        setChangeUsername('');
        setChangePasswordValue('');
        setIsChangeDialogOpen(false);
      }
    } catch (error) {
      console.error('Error changing password:', error);
    }
    setSaving(false);
  };

  const handleChangeRole = async () => {
    if (!changeUsername || !selectedRole) return;
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username: changeUsername, role: selectedRole }),
      });
      if (res.ok) {
        await fetchAdmins();
        setChangeUsername('');
        setSelectedRole('admin');
        setIsRoleDialogOpen(false);
      }
    } catch (error) {
      console.error('Error changing role:', error);
    }
    setSaving(false);
  };

  const deleteAdmin = async (username: string) => {
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'DELETE',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username }),
      });
      if (res.ok) {
        await fetchAdmins();
      }
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
    setSaving(false);
  };

  if (loading) return <div className="p-8 text-center">Loading admins...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {currentUserRole === 'superadmin' ? 'Admin Management' : 'Account Settings'}
          </h1>
          <Button
            onClick={() => router.push('/admin/dashboard')}
            variant="outline"
          >
            Back to Dashboard
          </Button>
        </div>

        {currentUserRole === 'superadmin' ? (
          <div className="flex gap-4 mb-8">
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <UserPlus className="w-4 h-4 mr-2" />
              Add New Admin
            </Button>

            <Button variant="outline" onClick={() => setIsChangeDialogOpen(true)}>
              <Key className="w-4 h-4 mr-2" />
              Change Password
            </Button>

            <Button variant="outline" onClick={() => setIsRoleDialogOpen(true)}>
              <UserPlus className="w-4 h-4 mr-2" />
              Change Role
            </Button>
          </div>
        ) : (
          <div className="flex gap-4 mb-8">
            <Button variant="outline" onClick={() => {
              const username = localStorage.getItem('adminUsername');
              if (username) {
                setChangeUsername(username);
              }
              setIsChangeDialogOpen(true);
            }}>
              <Key className="w-4 h-4 mr-2" />
              Change My Password
            </Button>
          </div>
        )}

        {/* Add Admin Modal */}
        {isAddDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New Admin</h3>
                <button onClick={() => setIsAddDialogOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value as 'admin' | 'superadmin')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <Button onClick={addAdmin} disabled={saving} className="w-full">
                  Add Admin
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {isChangeDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {currentUserRole === 'superadmin' ? 'Change Password' : 'Change My Password'}
                </h3>
                <button onClick={() => setIsChangeDialogOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="space-y-4">
                {currentUserRole === 'superadmin' && (
                  <div>
                    <label htmlFor="change-username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      id="change-username"
                      type="text"
                      value={changeUsername}
                      onChange={(e) => setChangeUsername(e.target.value)}
                      placeholder="Enter username"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
                {currentUserRole !== 'superadmin' && (
                  <p className="text-sm text-gray-600">
                    You are changing the password for: <strong>{localStorage.getItem('adminUsername')}</strong>
                  </p>
                )}
                <div>
                  <label htmlFor="change-password" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    id="change-password"
                    type="password"
                    value={changePasswordValue}
                    onChange={(e) => setChangePasswordValue(e.target.value)}
                    placeholder="Enter new password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button onClick={handleChangePassword} disabled={saving} className="w-full">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Change Role Modal */}
        {isRoleDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Change Role</h3>
                <button onClick={() => setIsRoleDialogOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="role-username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    id="role-username"
                    type="text"
                    value={changeUsername}
                    onChange={(e) => setChangeUsername(e.target.value)}
                    placeholder="Enter username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="new-role" className="block text-sm font-medium text-gray-700">New Role</label>
                  <select
                    id="new-role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as 'admin' | 'superadmin')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <Button onClick={handleChangeRole} disabled={saving} className="w-full">
                  Change Role
                </Button>
              </div>
            </div>
          </div>
        )}

        {currentUserRole === 'superadmin' ? (
          <Card>
            <CardHeader>
              <CardTitle>Current Admins</CardTitle>
            </CardHeader>
            <CardContent>
              {admins.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No admins found.</p>
              ) : (
                <div className="space-y-4">
                  {admins.map((admin) => (
                    <div key={admin._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{admin.username}</p>
                        <p className="text-sm text-gray-500">
                          Role: {admin.role} | Created: {new Date(admin.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {admin.role !== 'superadmin' && (
                          <Button
                            onClick={() => deleteAdmin(admin.username)}
                            disabled={saving}
                            variant="destructive"
                            size="sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Change Your Password</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                As a regular admin, you can only change your own password.
              </p>
              <div className="max-w-md">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="my-password" className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                      id="my-password"
                      type="password"
                      value={changePasswordValue}
                      onChange={(e) => setChangePasswordValue(e.target.value)}
                      placeholder="Enter new password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      const username = localStorage.getItem('adminUsername');
                      if (username) {
                        setChangeUsername(username);
                      }
                      handleChangePassword();
                    }}
                    disabled={saving}
                    className="w-full"
                  >
                    Update Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminManagementPage;