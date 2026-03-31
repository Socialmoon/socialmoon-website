'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, UserPlus, Key, UserCog, Shield, Users, ArrowLeft, X } from 'lucide-react';

type Admin = {
  id: string;
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
  const [errorMessage, setErrorMessage] = useState('');
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
    // Only superadmins can see the admin list
    const role = localStorage.getItem('adminRole') as 'admin' | 'superadmin' || 'admin';
    if (role !== 'superadmin') {
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/admins', {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setAdmins(data);
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to fetch admins. Please try again.');
      }
    } catch {
      setErrorMessage('Error fetching admins. Please check your connection and try again.');
    }
    setLoading(false);
  };

  const addAdmin = async () => {
    if (!newUsername || !newPassword) {
      alert('Username and password are required');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username: newUsername, password: newPassword, role: newRole }),
      });
      if (res.ok) {
        alert('Admin added successfully!');
        await fetchAdmins();
        setNewUsername('');
        setNewPassword('');
        setNewRole('admin');
        setIsAddDialogOpen(false);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to add admin');
      }
    } catch {
      alert('Error adding admin');
    }
    setSaving(false);
  };

  const handleChangePassword = async () => {
    const username = currentUserRole === 'superadmin' ? changeUsername : localStorage.getItem('adminUsername') || '';
    if (!username || !changePasswordValue) {
      alert('Username and password are required');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username, newPassword: changePasswordValue }),
      });
      if (res.ok) {
        alert('Password changed successfully!');
        setChangeUsername('');
        setChangePasswordValue('');
        setIsChangeDialogOpen(false);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to change password');
      }
    } catch {
      alert('Error changing password');
    }
    setSaving(false);
  };

  const handleChangeRole = async () => {
    if (!changeUsername || !selectedRole) {
      alert('Username and role are required');
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username: changeUsername, role: selectedRole }),
      });
      if (res.ok) {
        alert('Role changed successfully!');
        await fetchAdmins();
        setChangeUsername('');
        setSelectedRole('admin');
        setIsRoleDialogOpen(false);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to change role');
      }
    } catch {
      alert('Error changing role');
    }
    setSaving(false);
  };

  const deleteAdmin = async (username: string) => {
    if (!confirm(`Are you sure you want to delete admin: ${username}?`)) {
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/admins', {
        method: 'DELETE',
        headers: getAuthHeaders(),
        body: JSON.stringify({ username }),
      });
      if (res.ok) {
        alert('Admin deleted successfully!');
        await fetchAdmins();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete admin');
      }
    } catch {
      alert('Error deleting admin');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin management...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <Button
            onClick={() => router.push('/admin/dashboard')}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {currentUserRole === 'superadmin' ? (
                  <span className="flex items-center gap-3">
                    <Shield className="w-10 h-10 text-purple-600" />
                    Admin Management
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <Key className="w-10 h-10 text-blue-600" />
                    Account Settings
                  </span>
                )}
              </h1>
              <p className="text-gray-600">
                {currentUserRole === 'superadmin' 
                  ? 'Manage user accounts, permissions, and security settings' 
                  : 'Update your account password and preferences'}
              </p>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        {/* Statistics Cards (Superadmin only) */}
        {currentUserRole === 'superadmin' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Total Admins</p>
                    <p className="text-3xl font-bold">{admins.length}</p>
                  </div>
                  <Users className="w-12 h-12 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium mb-1">Superadmins</p>
                    <p className="text-3xl font-bold">{admins.filter(a => a.role === 'superadmin').length}</p>
                  </div>
                  <Shield className="w-12 h-12 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium mb-1">Regular Admins</p>
                    <p className="text-3xl font-bold">{admins.filter(a => a.role === 'admin').length}</p>
                  </div>
                  <UserCog className="w-12 h-12 text-green-200" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Action Buttons */}
        {currentUserRole === 'superadmin' ? (
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              onClick={() => setIsAddDialogOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add New Admin
            </Button>

            <Button 
              variant="outline" 
              onClick={() => setIsChangeDialogOpen(true)}
              className="border-2 hover:bg-gray-50"
            >
              <Key className="w-4 h-4 mr-2" />
              Change Password
            </Button>

            <Button 
              variant="outline" 
              onClick={() => setIsRoleDialogOpen(true)}
              className="border-2 hover:bg-gray-50"
            >
              <UserCog className="w-4 h-4 mr-2" />
              Change Role
            </Button>
          </div>
        ) : (
          <div className="flex gap-4 mb-8">
            <Button 
              onClick={() => {
                const username = localStorage.getItem('adminUsername');
                if (username) {
                  setChangeUsername(username);
                }
                setIsChangeDialogOpen(true);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
            >
              <Key className="w-4 h-4 mr-2" />
              Change My Password
            </Button>
          </div>
        )}

        {/* Add Admin Modal */}
        {isAddDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    Add New Admin
                  </h3>
                  <button 
                    onClick={() => setIsAddDialogOpen(false)} 
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                    Username *
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value as 'admin' | 'superadmin')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={addAdmin} 
                    disabled={saving || !newUsername || !newPassword} 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-3"
                  >
                    {saving ? 'Adding...' : 'Add Admin'}
                  </Button>
                  <Button 
                    onClick={() => setIsAddDialogOpen(false)} 
                    variant="outline"
                    className="flex-1 py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Change Password Modal */}
        {isChangeDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    {currentUserRole === 'superadmin' ? 'Change Password' : 'Change My Password'}
                  </h3>
                  <button 
                    onClick={() => setIsChangeDialogOpen(false)} 
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {currentUserRole === 'superadmin' && (
                  <div>
                    <label htmlFor="change-username" className="block text-sm font-semibold text-gray-700 mb-2">
                      Username *
                    </label>
                    <input
                      id="change-username"
                      type="text"
                      value={changeUsername}
                      onChange={(e) => setChangeUsername(e.target.value)}
                      placeholder="Enter username"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                )}
                {currentUserRole !== 'superadmin' && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      Changing password for: <strong className="font-bold">{localStorage.getItem('adminUsername')}</strong>
                    </p>
                  </div>
                )}
                <div>
                  <label htmlFor="change-password" className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password *
                  </label>
                  <input
                    id="change-password"
                    type="password"
                    value={changePasswordValue}
                    onChange={(e) => setChangePasswordValue(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={handleChangePassword} 
                    disabled={saving || !changePasswordValue} 
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3"
                  >
                    {saving ? 'Changing...' : 'Change Password'}
                  </Button>
                  <Button 
                    onClick={() => setIsChangeDialogOpen(false)} 
                    variant="outline"
                    className="flex-1 py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Change Role Modal */}
        {isRoleDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <UserCog className="w-5 h-5" />
                    Change Role
                  </h3>
                  <button 
                    onClick={() => setIsRoleDialogOpen(false)} 
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor="role-username" className="block text-sm font-semibold text-gray-700 mb-2">
                    Username *
                  </label>
                  <input
                    id="role-username"
                    type="text"
                    value={changeUsername}
                    onChange={(e) => setChangeUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="new-role" className="block text-sm font-semibold text-gray-700 mb-2">
                    New Role *
                  </label>
                  <select
                    id="new-role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as 'admin' | 'superadmin')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={handleChangeRole} 
                    disabled={saving || !changeUsername} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 py-3"
                  >
                    {saving ? 'Changing...' : 'Change Role'}
                  </Button>
                  <Button 
                    onClick={() => setIsRoleDialogOpen(false)} 
                    variant="outline"
                    className="flex-1 py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentUserRole === 'superadmin' ? (
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Admin Users
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Manage admin accounts, change passwords, modify roles, and delete users
              </p>
            </CardHeader>
            <CardContent className="p-6">
              {admins.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium mb-2">No admins found</p>
                  <p className="text-gray-400 text-sm">Click "Add New Admin" to create your first admin account</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {admins.map((admin) => (
                    <div 
                      key={admin.id} 
                      className="flex items-center justify-between p-5 border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          admin.role === 'superadmin' 
                            ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                            : 'bg-gradient-to-br from-blue-500 to-blue-600'
                        }`}>
                          {admin.role === 'superadmin' ? (
                            <Shield className="w-6 h-6 text-white" />
                          ) : (
                            <UserCog className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">{admin.username}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              admin.role === 'superadmin' 
                                ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}>
                              {admin.role === 'superadmin' ? '👑 Super Admin' : '👤 Admin'}
                            </span>
                            <span className="text-sm text-gray-500">
                              Created: {new Date(admin.createdAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            setChangeUsername(admin.username);
                            setIsChangeDialogOpen(true);
                          }}
                          disabled={saving}
                          variant="outline"
                          size="sm"
                          title="Change password"
                          className="hover:bg-green-50 hover:border-green-300 hover:text-green-700"
                        >
                          <Key className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => {
                            setChangeUsername(admin.username);
                            setSelectedRole(admin.role);
                            setIsRoleDialogOpen(true);
                          }}
                          disabled={saving}
                          variant="outline"
                          size="sm"
                          title="Change role"
                          className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                        >
                          <UserCog className="w-4 h-4" />
                        </Button>
                        {admin.username === localStorage.getItem('adminUsername') ? (
                          <Button
                            disabled={true}
                            variant="outline"
                            size="sm"
                            title="Cannot delete your own account"
                            className="opacity-40 cursor-not-allowed"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button
                            onClick={() => deleteAdmin(admin.username)}
                            disabled={saving}
                            variant="destructive"
                            size="sm"
                            title="Delete admin"
                            className="hover:bg-red-600"
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
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Key className="w-6 h-6 text-blue-600" />
                Change Your Password
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Update your account password to keep your account secure
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="max-w-md mx-auto">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <UserCog className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900 mb-1">Account: {localStorage.getItem('adminUsername')}</p>
                      <p className="text-sm text-blue-700">
                        As a regular admin, you can only change your own password. Contact a superadmin for other account changes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="my-password" className="block text-sm font-semibold text-gray-700 mb-2">
                      New Password *
                    </label>
                    <input
                      id="my-password"
                      type="password"
                      value={changePasswordValue}
                      onChange={(e) => setChangePasswordValue(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Use a strong password with at least 8 characters, including letters, numbers, and symbols
                    </p>
                  </div>
                  <Button
                    onClick={handleChangePassword}
                    disabled={saving || !changePasswordValue}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-3 text-base font-semibold"
                  >
                    {saving ? 'Updating Password...' : 'Update Password'}
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