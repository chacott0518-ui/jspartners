import React, { useEffect, useState } from 'react';
import { getLeads, updateLeadStatus } from '../services/leadService';
import { Lead, LeadStatus, LeadType } from '../types';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Admin: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    const data = await getLeads();
    // Sort by date desc
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: LeadStatus) => {
    await updateLeadStatus(id, newStatus);
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const getStatusColor = (status: LeadStatus) => {
    switch (status) {
      case LeadStatus.NEW: return 'bg-blue-100 text-blue-800';
      case LeadStatus.CONTACTED: return 'bg-yellow-100 text-yellow-800';
      case LeadStatus.CLOSED: return 'bg-green-100 text-green-800';
      case LeadStatus.ARCHIVED: return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 p-6 md:p-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-stone-200 rounded-full transition-colors">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="font-serif text-3xl">Dashboard</h1>
          </div>
          <button 
            onClick={fetchLeads} 
            className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 border border-stone-200 hover:bg-stone-100 transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        <div className="bg-white border border-stone-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-stone-100 text-stone-600 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Name / Phone</th>
                  <th className="px-6 py-4 font-medium">Details (Area/Budget)</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-stone-400">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                          lead.type === LeadType.OWNER ? 'bg-purple-100 text-purple-800' : 'bg-stone-200 text-stone-800'
                        }`}>
                          {lead.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-stone-900">{lead.name}</div>
                        <div className="text-stone-500 text-xs mt-0.5">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-stone-900">{lead.area || '-'}</div>
                        <div className="text-stone-500 text-xs mt-0.5">{lead.budgetOrValue || '-'}</div>
                      </td>
                      <td className="px-6 py-4 text-stone-500">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                          className={`text-xs font-bold px-2 py-1 rounded border-none cursor-pointer focus:ring-0 ${getStatusColor(lead.status)}`}
                        >
                          {Object.values(LeadStatus).map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};