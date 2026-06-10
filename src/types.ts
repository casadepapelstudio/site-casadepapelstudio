export interface WoodFinish {
  id: string;
  name: string;
  type: string; // 'freijo' | 'carvalho' | 'nogueira' | 'cumaru' etc
  tone: string;
  description: string;
  textureUrl: string;
  featuredRoomUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  priority: number;
  featured: boolean;
  tagline: string;
  summary: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  serviceCategory: string;
  location: string;
  imageUrl: string;
  architectPartner?: string;
  instagramUrl: string;
}

export interface StepBudget {
  b2b: boolean;
  service: string;
  area: string; // 'small' | 'medium' | 'large' | 'commercial'
  complexity: string; // 'standard' | 'high'
  woodTonePreferences: string[];
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  architectRegistry?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  isArchitect: boolean;
  avatarUrl: string;
  text: string;
  projectsCompleted: number;
  rating: number;
}
