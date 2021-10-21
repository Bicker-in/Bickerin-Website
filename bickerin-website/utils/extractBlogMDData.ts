import { readdir, readFile } from 'fs/promises';
import * as matter from 'gray-matter';

const MONTHS = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

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
      const dateObject = new Date(date);
      blogData.push({
        slug,
        date: {
          month: MONTHS[dateObject.getMonth()],
          day: dateObject.getDate(),
          year: dateObject.getFullYear()
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