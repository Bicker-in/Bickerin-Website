import { readdir } from 'fs/promises';
import * as matter from 'gray-matter';
import translateDate from './translateDate';

interface BlogPostData {
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

const extractBlogMDData = async () => {
  const blogData: Array<BlogPostData> = [];
  try {
    const files = await readdir('./blog');
    files.forEach((file) => {
      const {
        data: {
          slug, date, title, author, description,
        },
      } = matter.read(`./blog/${file}`);
      const { month, day, year } = translateDate(date);
      blogData.push({
        slug,
        date: {
          month,
          day,
          year,
        },
        title,
        author,
        description,
      });
    });
  } catch (err) {
    console.error(err);
  }
  return blogData;
};

export default extractBlogMDData;
