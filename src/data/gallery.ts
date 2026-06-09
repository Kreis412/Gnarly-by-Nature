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
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
    ],
    category: 'wedding'
  },
  {
    id: 'g2',
    title: 'Lake Erie Memorial Plaque',
    description: 'A personalized memorial piece incorporating found objects and engraved driftwood.',
    images: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800'],
    category: 'memorial'
  }
];
