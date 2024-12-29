import type { ImageMetadata } from 'astro';

export type ProjectCardProps = {
  title?: string;
  content?: string;
  imgMeta?: ImageMetadata;
  reverse?: boolean;
  demoLink?: string;
  sourceLink?: string;
};
