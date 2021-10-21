import { readdir, readFile } from 'fs/promises';
import * as matter from 'gray-matter';
import translateDate from './translateDate';

const extractBlogMDData = async () => {
  const blogData = [];
  try {
    const files = await readdir('./blog');
    for (const file of files) {
      const {
        data: {
          slug,
          date,
          title,
          author,
          description
        }
      } = matter.read(`./blog/${file}`);
      const {
        month,
        day,
        year
      } = translateDate(date);
      blogData.push({
        slug,
        date: {
          month,
          day,
          year 
        },
        title,
        author,
        description
      });
    }
  } catch (err) {
    console.error(err);
  }
  return blogData;
}

export default extractBlogMDData;