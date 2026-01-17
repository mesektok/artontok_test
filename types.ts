
export type Language = 'KOR' | 'ENG';

export type PostType = 'news' | 'coaching';

export interface Post {
  id: string;
  type: PostType;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  imageUrl: string;
  date: string;
  author: string;
}

export interface EducationEvent {
  id: string;
  title: Record<Language, string>;
  instructor: Record<Language, string>;
  date: string; // ISO string
  time: string;
  price: number;
  description: Record<Language, string>;
}

export interface SiteConfig {
  primaryColor: string;
  siteName: string;
  seoTitle: string;
  seoDescription: string;
}

export interface SiteContent {
  heroTitle: Record<Language, string>;
  heroSub: Record<Language, string>;
  newsSectionTitle: Record<Language, string>;
  coachingSectionTitle: Record<Language, string>;
}
