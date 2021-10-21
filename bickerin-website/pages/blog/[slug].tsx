import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import textContent from '../../website-text-content.json';
import * as matter from 'gray-matter';
import extractBlogMDData from '../../utils/extractBlogMDData';
import AppContainer from '../../components/AppContainer';
import BlogContainer from '../../components/BlogContainer';
import translateDate from '../../utils/translateDate';
import { BlogFrontMatterData } from '../../types/pages/blog.d';

interface BlogItemData extends BlogFrontMatterData {
  date: string;
  authorImgURL: string;
};

interface BlogPostProps {
  blogItemData: BlogItemData
}
const BlogPost: NextPage<BlogPostProps> = ({blogItemData}) => {
  const {
    title,
    author,
    date,
    authorImgURL
  } = blogItemData;

  const {
    month,
    day,
    year
  } = translateDate(date as string);

  return (
    <AppContainer>
      <BlogContainer>
        <time className="text-gray-300 text-sm md:text-base lg:text-lg">
          {month} {day}, {year}
        </time>
        <header>
          <h3 className="article-title text-4xl md:text-5xl lg:text-7xl mt-5 mb-2 font-normal">{title}</h3>
        </header>
        <address className="not-italic text-gray-200 font-light text-base md:text-lg lg:text-2xl flex flex-row items-center gap-x-3 mb-4">
          <div className="w-10 lg:w-14">
            <Image layout="responsive" className="rounded-full" src={authorImgURL} alt={`${author}'s avatar pic'`} width="50" height="50"/>
          </div>
          <>{author}</>
        </address>
      </BlogContainer>
    </AppContainer>
  );
};

export async function getStaticPaths() {
  const blogItems = await extractBlogMDData();

  const paths = blogItems.map(({slug}) => {
    return({
      params: { slug },
    });
  });

  return {paths, fallback: false};
};

interface GetStaticBlogPostProps {
  params: {
    slug: string
  }
}
export async function getStaticProps(context: GetStaticBlogPostProps) {
  const {params: {slug}} = context;

  const {
    data,
    content
  } = matter.read(`./blog/${slug}.md`);

  const [{
    imgURL: authorImgURL
  }] = textContent.teamMembers.filter(({name}) => name === data.author);

  const blogItemData = {
    ...data,
    authorImgURL
  }

  return {
    props: {
      blogItemData
    }
  }
}

export default BlogPost;