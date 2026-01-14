export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  CLOSED = 'CLOSED',
  ARCHIVED = 'ARCHIVED'
}

export enum LeadType {
  BUYER = 'BUYER',
  OWNER = 'OWNER'
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  area: string; // Interest area or Building location
  budgetOrValue: string; // Budget for buyer, Value for owner
  type: LeadType;
  status: LeadStatus;
  createdAt: string;
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  yield: string;
  image: string;
  tags: string[];
}

export interface MarketData {
  month: string;
  gangnam: number;
  seongsu: number;
  hannam: number;
}