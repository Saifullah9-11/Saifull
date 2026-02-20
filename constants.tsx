
import React from 'react';
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'B2B Lead Pipeline Engine',
    client: 'SaaS Innovators',
    category: 'Lead Generation',
    problem: 'Client had inconsistent inbound leads and poor quality outreach responses.',
    strategy: 'Implemented a multi-channel cold email and LinkedIn outreach system with strict prospect filtering.',
    solution: 'Automated follow-up sequences and high-conversion email copywriting.',
    results: 'Generated 40+ qualified demo bookings in the first 60 days.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Search Authority Growth',
    client: 'Fintech Hub',
    category: 'SEO & Link Building',
    problem: 'Low discoverability for high-intent keywords.',
    strategy: 'On-page optimization and a high-authority link building campaign focused on niche relevance.',
    solution: 'Optimized meta titles, descriptions, and implemented a strategic internal linking map.',
    results: '150% increase in organic search traffic over 6 months.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Social Ecosystem Launch',
    client: 'Ecom Direct',
    category: 'Social Marketing',
    problem: 'High ad spend but low organic engagement and trust.',
    strategy: 'Shifted focus to community building and strategic content distribution in industry groups.',
    solution: 'Content calendar focused on educational value and engagement growth.',
    results: '30% increase in direct-to-site traffic from social channels.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Lead Generation',
    description: 'Structured cold and warm outreach across multiple platforms, including prospect research, audience targeting, and qualification systems.',
    icon: 'Target'
  },
  {
    id: '2',
    title: 'Social Media Marketing',
    description: 'Content posting, engagement growth, and strategic group sharing to attract potential clients and drive traffic.',
    icon: 'Share2'
  },
  {
    id: '3',
    title: 'SEO & Link Building',
    description: 'Link-building outreach and on-page improvements designed to strengthen search visibility and long-term discoverability.',
    icon: 'Search'
  },
  {
    id: '4',
    title: 'Quality Assurance (QA)',
    description: 'Campaign reviews, landing page checks, and funnel testing to ensure accuracy and prevent budget loss.',
    icon: 'ShieldCheck'
  },
  {
    id: '5',
    title: 'Email Writing & Research',
    description: 'Cold email writing, follow-up sequences, and targeted prospect research to support business development.',
    icon: 'Mail'
  },
  {
    id: '6',
    title: 'Project Management',
    description: 'Campaign coordination, workflow management, and reporting to ensure smooth execution and consistent results.',
    icon: 'Briefcase'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Founder, B2B Growth Lab',
    content: "Saifullah built a lead system that completely changed our outreach game. We finally have a predictable pipeline.",
    image: 'https://picsum.photos/seed/sarah/200/200'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Marketing Director, TechScale',
    content: "The level of detail in his SEO execution and campaign QA is phenomenal. He doesn't just execute; he optimizes for ROI.",
    image: 'https://picsum.photos/seed/david/200/200'
  }
];
