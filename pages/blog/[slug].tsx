import React from 'react';
import { NextPage } from 'next';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import addClasses from 'rehype-add-classes';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeReact from 'rehype-react';
import * as matter from 'gray-matter';
import extractBlogMDData from '../../utils/extractBlogMDData';
import AppContainer from '../../components/AppContainer';
import BlogContainer from '../../components/BlogContainer';
import AvatarPic from '../../components/AvatarPic';
import translateDate from '../../utils/translateDate';
import { BlogFrontMatterData } from '../../types/pages/blog.d';
// eslint-disable-next-line import/extensions
import textContent from '../../website-text-content.json';

/* Wrap in Try-Catch */
const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(addClasses, {
    'h1,h2,h3,h4,h5,h6,p,blockquote,ul,ol,em': 'font-primary-font text-white',
    'h1,h2,h3,h4,h5,h6': 'heading-underline heading-border-bottom flex flex-row py-2',
    code: 'blog-block-elements',
    'p,blockquote,li': 'font-light',
    'ul,ol': 'list-inside my-4 ml-2',
    h1: 'blog-post-h1',
    h2: 'blog-post-h2',
    h3: 'blog-post-h3',
    h4: 'blog-post-h4',
    h5: 'blog-post-h5',
    h6: 'blog-post-h6',
    p: 'blog-post-p',
    ol: 'blog-post-ol',
    ul: 'blog-post-ul',
    li: 'blog-post-li',
    pre: 'blog-post-code-pre',
    blockquote: 'blog-post-blockquote',
    em: 'italic',
    strong: 'bold',
    inlineCode: 'blog-post-inline-code',
    a: 'blog-post-a',
  })
  .use(rehypeReact, { createElement: React.createElement });

interface BlogItemData extends BlogFrontMatterData {
  date: string;
  authorImgURL: string;
}

interface BlogPostProps {
  blogItemData: BlogItemData,
  blogContent: string,
}
const BlogPost: NextPage<BlogPostProps> = ({ blogItemData, blogContent }) => {
  const {
    title,
    author,
    date,
    authorImgURL,
  } = blogItemData;

  const {
    month,
    day,
    year,
  } = translateDate(date as string);

  // Link Code !!!
  const X = JSON.parse(blogContent, (k, v) => {
    const matches = v && v.match && v.match(/^\$\$Symbol:(.*)$/);

    return matches ? Symbol.for(matches[1]) : v;
  });

  return (
    <AppContainer>
      <BlogContainer>
        <time className="text-gray-300 text-sm md:text-base lg:text-lg ">
          {month}
          {' '}
          {day}
          ,
          {' '}
          {year}
        </time>
        <header>
          <h3 className="article-title text-4xl md:text-5xl lg:text-7xl mt-5 mb-2 font-normal">{title}</h3>
        </header>
        <address className="not-italic text-gray-200 font-light text-base md:text-lg lg:text-2xl flex flex-row items-center gap-x-2 mb-4">
          <div className="w-10 lg:w-14">
            <AvatarPic authorName={author} authorImgURL={authorImgURL} />
          </div>
          <>{author}</>
        </address>
        <div className="p-4">
          {X}
        </div>
      </BlogContainer>
    </AppContainer>
  );
};

export async function getStaticPaths() {
  const blogItems = await extractBlogMDData();

  const paths = blogItems.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

interface GetStaticBlogPostProps {
  params: {
    slug: string
  }
}
export async function getStaticProps(context: GetStaticBlogPostProps) {
  const { params: { slug } } = context;

  const {
    data,
    content,
  } = matter.read(`./blog/${slug}.md`);

  const [{
    imgURL: authorImgURL,
  }] = textContent.teamMembers.filter(({ name }) => name === data.author);

  const blogItemData = {
    ...data,
    authorImgURL,
  };

  // Link Code !!!
  const stringifiedBlogContent = JSON.stringify(processor.processSync(content).result, (k, v) => (typeof v === 'symbol' ? `$$Symbol:${Symbol.keyFor(v)}` : v));

  return {
    props: {
      blogItemData,
      blogContent: stringifiedBlogContent,
    },
  };
}

export default BlogPost;
