// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  description: string;
  images: string[];
  category: 'driftwood' | 'handmade' | 'gift';
  isHighlight?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Lake Erie Driftwood Mirror',
    price: 185,
    dimensions: '24" x 24"',
    description: 'A hand-selected frame of weathered Lake Erie driftwood encircling a high-quality circular mirror.',
    images: ['https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800'], // Placeholder
    category: 'driftwood',
    isHighlight: true
  },
  {
    id: '2',
    name: 'Forest Spirit Sculpture',
    price: 120,
    dimensions: '18" Height',
    description: 'Intricately carved cedar wood sculpture capturing the essence of the old growth forest.',
    images: ['https://images.unsplash.com/photo-1518998053504-5368efc9bca7?q=80&w=800'], // Placeholder
    category: 'handmade',
    isHighlight: true
  },
  {
    id: '3',
    name: 'Found Glass Wind Chime',
    price: 45,
    dimensions: '12" Length',
    description: 'Found glass and driftwood pieces that create a gentle, melodic sound in the breeze.',
    images: ['https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800'], // Placeholder
    category: 'gift',
    isHighlight: true
  }
];
