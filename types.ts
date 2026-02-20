
export enum Resolution {
  R1K = "1K",
  R2K = "2K",
  R4K = "4K"
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  problem: string;
  strategy: string;
  solution: string;
  results: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}
