
import React from 'react';
import { Project, Service, Testimonial } from './types';
import { Layout, Palette, Code, Megaphone } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Digital Rebranding',
    client: 'Lumina Global',
    category: 'Brand Strategy',
    problem: 'Outdated visual identity that failed to resonate with modern luxury consumers.',
    strategy: 'Leverage minimalist aesthetics and emotional storytelling to build authority.',
    solution: 'A complete visual overhaul and digital strategy centered on refined typography.',
    results: '45% increase in high-tier leads within the first quarter.',
    image: 'https://picsum.photos/seed/lumina/1200/800'
  },
  {
    id: '2',
    title: 'Aura E-Commerce Ecosystem',
    client: 'Aura Fashion',
    category: 'UX/UI Design',
    problem: 'High cart abandonment rates due to complex checkout flows.',
    strategy: 'Streamlined user journeys and implemented micro-interactions for engagement.',
    solution: 'A mobile-first platform that emphasizes product tangibility through high-res media.',
    results: 'Conversion rates improved by 22% year-over-year.',
    image: 'https://picsum.photos/seed/aura/1200/800'
  },
  {
    id: '3',
    title: 'Titan Fintech Interface',
    client: 'Titan Assets',
    category: 'Product Design',
    problem: 'Opaque financial data presentation making decision-making difficult.',
    strategy: 'Developed a custom visualization system for real-time market tracking.',
    solution: 'An intuitive dashboard that balances complexity with clarity.',
    results: 'User retention spiked by 30% after the beta launch.',
    image: 'https://picsum.photos/seed/titan/1200/800'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Brand Identity',
    description: 'Crafting sophisticated visual systems that command attention and communicate authority.',
    icon: 'Palette'
  },
  {
    id: '2',
    title: 'Digital Strategy',
    description: 'Data-driven approaches to positioning your business for maximum market impact.',
    icon: 'Megaphone'
  },
  {
    id: '3',
    title: 'Product Design',
    description: 'User-centric interfaces that blend beauty with seamless functionality.',
    icon: 'Layout'
  },
  {
    id: '4',
    title: 'Full-Stack Dev',
    description: 'Clean, performant, and scalable code architectures tailored to your vision.',
    icon: 'Code'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Richards',
    role: 'CEO, Lumina Global',
    content: "Saifullah's vision transformed our brand from a standard player to a market leader. His attention to detail is unmatched.",
    image: 'https://picsum.photos/seed/elena/200/200'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Product Lead, Aura',
    content: "Working with Saifullah was a masterclass in strategic design. He doesn't just make things pretty; he makes them work.",
    image: 'https://picsum.photos/seed/marcus/200/200'
  }
];
