// src/data/story.ts

export interface StoryContent {
  title: string;
  image: string;
  paragraphs: string[];
}

export const storyContent: StoryContent = {
  title: "The Heart Behind the Wood",
  image: "/images/flowers on a log.jpg",
  paragraphs: [
    "My journey with Lake Erie driftwood began with a simple walk along the shore. I was captivated by the gnarled shapes and silvered textures of wood that had been weathered by the lake's relentless waves and winds.",
    "What started as a collection of found treasures soon turned into a passion for preservation. Every piece of wood tells a story of its journey through the Great Lakes, and my goal is to highlight that natural history through art.",
    "From grand wedding arches to intimate memorial pieces, I pour my heart into every creation. I believe that nature provides the most beautiful materials; I simply help them find their new home in yours."
  ]
};
