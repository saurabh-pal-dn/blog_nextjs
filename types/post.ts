export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
  readDurationinMinutes: string;
};

export type PostTypeCategory = 'Tech' | 'PopCulture' | 'website';
