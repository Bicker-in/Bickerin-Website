import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import { BlogFrontMatterData } from '../../types/pages/blog.d';
import BlogContainer from '../../components/BlogContainer';
import AppContainer from '../../components/AppContainer';
import extractBlogMDData from '../../utils/extractBlogMDData';
import BlogPostInfo from '../../components/BlogPostInfo';

interface BlogItemData extends BlogFrontMatterData {
  date: {
    month: string;
    day: number;
    year: number;
  };
}

interface BlogItemProps {
  blogItemData: BlogItemData
}
const BlogItemContainer: FunctionComponent<BlogItemProps> = ({
  blogItemData: {
    slug,
    date: {
      month,
      day,
      year,
    },
    title,
    author,
    description,
  },
}) => (
  <li>
    <article className="bg-matte-black text-white p-2 rounded-md font-primary-font font-light">
      <BlogPostInfo
        slug={slug}
        month={month}
        day={day}
        year={year}
        title={title}
        author={author}
        description={description}
        desc={description}
      />
    </article>
  </li>
);

interface BlogProps {
  blogData: Array<BlogItemData>;
}
const Blog: NextPage<BlogProps> = ({ blogData }) => (
  <AppContainer>
    <BlogContainer>
      <header>
        <h1 className="article-title">Project Blog</h1>
      </header>
      <ul className="w-full md:w-5/6 lg:w-3/4 mt-4 flex flex-col gap-y-4">
        {blogData.map((blogItemData) => (
          <BlogItemContainer key={blogItemData.slug} blogItemData={blogItemData} />
        ))}
      </ul>
    </BlogContainer>
  </AppContainer>
);

export async function getStaticProps() {
  const blogData: Array<BlogFrontMatterData> = await extractBlogMDData();

  return ({
    props: {
      blogData,
    },
  });
}

export default Blog;
