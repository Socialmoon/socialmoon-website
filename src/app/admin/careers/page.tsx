'use client';

import { useEffect, useState } from 'react';
import { Plus, Trash2, Edit2, Check, X, Briefcase, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Job = {
  _id?: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
  formLink: string;
  active: boolean;
};

const EMPTY: Job = { title: '', type: 'Full-time', location: 'Remote', department: 'Growth', description: '', requirements: [], formLink: '', active: true };

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Job | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [reqInput, setReqInput] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchJobs = async () => {
    const res = await fetch('/api/careers');
    const data = await res.json();
    setJobs(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => { fetchJobs(); }, []);

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      if (isNew) {
        await fetch('/api/careers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editing) });
      } else {
        await fetch(`/api/careers/${editing._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editing) });
      }
      await fetchJobs();
      setEditing(null);
      setIsNew(false);
    } finally {
      setSaving(false);
    }
  };

  const deleteJob = async (id: string) => {
    if (!confirm('Delete this job posting?')) return;
    await fetch(`/api/careers/${id}`, { method: 'DELETE' });
    await fetchJobs();
  };

  const toggleActive = async (job: Job) => {
    await fetch(`/api/careers/${job._id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...job, active: !job.active }) });
    await fetchJobs();
  };

  const addReq = () => {
    if (!reqInput.trim() || !editing) return;
    setEditing({ ...editing, requirements: [...editing.requirements, reqInput.trim()] });
    setReqInput('');
  };

  const removeReq = (i: number) => {
    if (!editing) return;
    setEditing({ ...editing, requirements: editing.requirements.filter((_, idx) => idx !== i) });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Careers</h1>
          <p className="text-gray-500 text-sm">Manage job postings shown on the careers page</p>
        </div>
        <button
          onClick={() => { setEditing({ ...EMPTY }); setIsNew(true); }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Job
        </button>
      </div>

      {/* Edit / Create Form */}
      {editing && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{isNew ? 'New Job Posting' : 'Edit Job'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Job Title *</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="e.g. Senior Growth Strategist" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Department</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={editing.department} onChange={e => setEditing({ ...editing, department: e.target.value })}>
                {['Growth', 'Engineering', 'Sales', 'Design', 'Operations'].map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Type</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value })}>
                {['Full-time', 'Part-time', 'Contract', 'Internship'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Location</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={editing.location} onChange={e => setEditing({ ...editing, location: e.target.value })} placeholder="e.g. Remote / Lucknow" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Description *</label>
            <textarea className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={3} value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} placeholder="Role description..." />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Google Form / Application Link</label>
            <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={editing.formLink} onChange={e => setEditing({ ...editing, formLink: e.target.value })} placeholder="https://forms.gle/..." />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-600 mb-1">Requirements</label>
            <div className="flex gap-2 mb-2">
              <input className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={reqInput} onChange={e => setReqInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && addReq()} placeholder="Add requirement and press Enter" />
              <button onClick={addReq} className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {editing.requirements.map((r, i) => (
                <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                  {r}
                  <button onClick={() => removeReq(i)} className="text-blue-400 hover:text-blue-700"><X className="w-3 h-3" /></button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={save} disabled={saving || !editing.title || !editing.description} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-50 transition-all">
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200">Cancel</button>
          </div>
        </div>
      )}

      {/* Jobs List */}
      {loading ? (
        <div className="flex justify-center py-12"><div className="flex gap-2">{[0,1,2].map(i => <div key={i} className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: `${i*0.1}s` }} />)}</div></div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
          <Briefcase className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No job postings yet</p>
          <p className="text-gray-400 text-sm">Click "Add Job" to create your first posting</p>
        </div>
      ) : (
        <div className="space-y-3">
          {jobs.map(job => (
            <div key={job._id} className={`bg-white rounded-xl border ${job.active ? 'border-gray-100' : 'border-gray-100 opacity-60'} shadow-sm p-5 flex items-start justify-between gap-4`}>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-sm">{job.title}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">{job.department}</span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">{job.type}</span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">{job.location}</span>
                  {!job.active && <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold">Inactive</span>}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{job.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Link href={`/careers/${job._id}`} target="_blank" className="p-1.5 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 transition-all" title="View public page">
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <button onClick={() => toggleActive(job)} className={`p-1.5 rounded-lg text-xs font-medium transition-all ${job.active ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`} title={job.active ? 'Deactivate' : 'Activate'}>
                  <Check className="w-4 h-4" />
                </button>
                <button onClick={() => { setEditing({ ...job }); setIsNew(false); }} className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => job._id && deleteJob(job._id)} className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
