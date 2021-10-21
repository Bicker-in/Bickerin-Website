import { NextPage } from 'next';
import extractBlogMDData from '../../utils/extractBlogMDData';
import * as matter from 'gray-matter';
import AppContainer from '../../components/AppContainer';
import { BlogFrontMatterData } from '../../types/pages/blog.d';

interface BlogPostProps {
  blogItemData: BlogFrontMatterData
}
const BlogPost: NextPage<BlogPostProps> = ({blogItemData}) => {

  return (
    <AppContainer>
      <p>Post:</p>
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
    data: blogItemData,
    content
  } = matter.read(`./blog/${slug}.md`);

  return {
    props: {
      blogItemData
    }
  }
}

export default BlogPost;