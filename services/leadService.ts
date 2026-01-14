import { Lead, LeadStatus, LeadType } from '../types';

const DB_KEY = 'standard_leads_db';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getLeads = async (): Promise<Lead[]> => {
  await delay(300);
  const data = localStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : [];
};

export const createLead = async (
  data: Omit<Lead, 'id' | 'createdAt' | 'status'>
): Promise<Lead> => {
  await delay(500);
  const leads = await getLeads();
  
  const newLead: Lead = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    status: LeadStatus.NEW,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(DB_KEY, JSON.stringify([newLead, ...leads]));
  return newLead;
};

export const updateLeadStatus = async (id: string, status: LeadStatus): Promise<void> => {
  await delay(200);
  const leads = await getLeads();
  const updatedLeads = leads.map(lead => 
    lead.id === id ? { ...lead, status } : lead
  );
  localStorage.setItem(DB_KEY, JSON.stringify(updatedLeads));
};