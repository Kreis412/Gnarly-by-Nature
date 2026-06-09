// src/data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    location: 'Lake Erie Shore',
    text: 'The driftwood arch for our wedding was more beautiful than I ever imagined. It truly captured the natural spirit of the lake.',
    date: '2025-08-15'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    location: 'Portland, OR',
    text: 'I commissioned a memorial piece for my father, and the craftsmanship and sensitivity shown were incredible. A treasure we will keep forever.',
    date: '2026-02-10'
  }
];
