// src/data/gallery.ts

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: 'wedding' | 'custom' | 'memorial' | 'display';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Driftwood Wedding Arch',
    description: 'A grand, 8-foot tall arch made from silver-weathered driftwood, adorned with local flora.',
    images: [
      '/images/flowers on a log.jpg',
      '/images/wild flowers.jpg'
    ],
    category: 'wedding'
  },
  {
    id: 'g2',
    title: 'Succulent Display',
    description: 'A beautiful arrangement of large and pink succulents in natural driftwood containers.',
    images: [
      '/images/large succulents (1).jpg',
      '/images/pink succulents.jpg'
    ],
    category: 'display'
  },
  {
    id: 'g3',
    title: 'Promotional Flyer',
    description: 'Our latest event flyer showcasing our unique creations.',
    images: ['/images/flyer.jpg'],
    category: 'display'
  }
];
