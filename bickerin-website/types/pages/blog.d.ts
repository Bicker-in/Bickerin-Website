export interface BlogFrontMatterData {
  slug: string;
  date: {
    month: string;
    day: number;
    year: number;
  };
  title: string;
  author: string;
  description: string;
}