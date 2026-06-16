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
    name: 'Driftwood Display Shelf',
    price: 174,
    dimensions: '30" x 8"',
    description: 'A beautiful wall-mounted display shelf crafted from natural weathered Lake Erie driftwood.',
    images: ['/images/display shelf.png'],
    category: 'driftwood',
    isHighlight: true
  },
  {
    id: '2',
    name: 'Love Wall Hooks',
    price: 78,
    dimensions: '18" x 6"',
    description: 'Charming wall-mounted hooks featuring a rustic "Love" sign, handcrafted from driftwood.',
    images: ['/images/Love wall hooks.png'],
    category: 'handmade',
    isHighlight: true
  },
  {
    id: '3',
    name: 'Melted Glass Driftwood Art',
    price: 132,
    dimensions: '14" Height',
    description: 'A stunning decorative piece featuring hand-blown glass melted over a natural driftwood base.',
    images: ['/images/melted glass.png'],
    category: 'driftwood',
    isHighlight: true
  },
  {
    id: '4',
    name: 'Driftwood Jewelry Stand',
    price: 102,
    dimensions: '12" x 16"',
    description: 'An elegant jewelry display stand handcrafted from weathered shoreline branches.',
    images: ['/images/jewelry stand.jpg'],
    category: 'handmade'
  },
  {
    id: '5',
    name: 'Driftwood Wall Sconce',
    price: 114,
    dimensions: '14" Height',
    description: 'A unique wall sconce crafted from Lake Erie driftwood that casts a warm, organic glow.',
    images: ['/images/sconce.png'],
    category: 'driftwood'
  },
  {
    id: '6',
    name: 'Triple Tealight Holder',
    price: 66,
    dimensions: '12" x 4"',
    description: 'A handcrafted driftwood holder for three tealight candles, perfect for a cozy atmosphere.',
    images: ['/images/triple tealights .png'],
    category: 'driftwood'
  },
  {
    id: '7',
    name: 'Single Tealight Holder',
    price: 30,
    dimensions: '4" x 4"',
    description: 'A compact and rustic driftwood single tealight candle holder.',
    images: ['/images/single tea light .png'],
    category: 'gift'
  }
];
