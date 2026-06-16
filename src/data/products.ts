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
    images: ['/images/driftwood-mirror.jpg'],
    category: 'driftwood',
    isHighlight: true
  },
  {
    id: '3',
    name: 'Found Glass Wind Chime',
    price: 45,
    dimensions: '12" Length',
    description: 'Found glass and driftwood pieces that create a gentle, melodic sound in the breeze.',
    images: ['/images/wind-chime.jpg'],
    category: 'gift',
    isHighlight: true
  },
  {
    id: '4',
    name: 'Handcrafted Coasters',
    price: 35,
    dimensions: '4" x 4"',
    description: 'Beautifully finished natural wood coasters, perfect for any home.',
    images: ['/images/Coasters.jpg'],
    category: 'handmade'
  },
  {
    id: '5',
    name: 'Driftwood Sconce',
    price: 95,
    dimensions: '14" Height',
    description: 'A unique wall sconce crafted from Lake Erie driftwood.',
    images: ['/images/sconce.jpg'],
    category: 'driftwood'
  },
  {
    id: '6',
    name: 'Triple Tealight Holder',
    price: 55,
    dimensions: '12" x 4"',
    description: 'A handcrafted driftwood holder for three tealight candles.',
    images: ['/images/triple tealights.jpg'],
    category: 'driftwood'
  }
];
