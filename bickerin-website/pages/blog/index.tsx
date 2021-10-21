import { readdir, readFile } from 'fs/promises';
import React, { FunctionComponent } from 'react';
import { NextPage } from "next";
import Link from "next/link";
import * as matter from 'gray-matter';
import { BlogFrontMatterData } from '../../types/pages/blog.d';
import AppContainer from '../../components/AppContainer';
import extractBlogMDData from '../../utils/extractBlogMDData';

interface BlogItemProps {
  blogItemData: BlogFrontMatterData
}
const BlogItem: FunctionComponent<BlogItemProps> = ({
    blogItemData: {
      slug,
      date: {
        month,
        day,
        year
      },
      title,
      author,
      description
    }
  }) => (
    <li>
      <article className="bg-matte-black text-white p-2 rounded-md font-primary-font font-light">
        <time className="text-gray-300 text-xs lg:text-sm">
          {month} {day}, {year}
        </time>
        <header>
          <Link href={slug} passHref>
            <h3 className="title-text font-normal">{title}</h3>
          </Link>
        </header>
        <address className="not-italic">
          {author}
        </address>
        <p className="text-gray-300 text-xs lg:text-sm mt-2">
          {description}
        </p>
      </article>
    </li>
  );

interface BlogProps {
  blogData: Array<BlogFrontMatterData>;
};
const Blog: NextPage<BlogProps> = ({blogData}) => {

  console.log(blogData);

  return (
    <AppContainer>
      <div className="flex flex-col items-center mt-4">
        <article className="w-11/12 md:w-5/6 lg:w-4/6">
          <header>
            <h1 className="article-title">Project Blog</h1>
          </header>
          <ul className="w-full md:w-5/6 lg:w-3/4 mt-4 flex flex-col gap-y-4">
            {blogData.map((blogItemData) => (
              <BlogItem key={blogItemData.slug} blogItemData={blogItemData} />
            ))}
          </ul>
        </article>
      </div>
    </AppContainer>
  );
};

export async function getStaticProps() {
  const blogData: Array<BlogFrontMatterData> = await extractBlogMDData();

  return({
    props: {
      blogData
    }
  })
}

export default Blog;