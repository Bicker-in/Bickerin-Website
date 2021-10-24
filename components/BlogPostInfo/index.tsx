import Link from "next/link";
import React, { FunctionComponent } from "react";
import { BlogFrontMatterData } from "../../types/pages/blog.d";

interface BlogPostInfoProps extends BlogFrontMatterData {
  month: string;
  day: number;
  year: number;
  desc?: string;
}
const BlogPostInfo: FunctionComponent<BlogPostInfoProps> = ({
  month,
  day,
  year,
  slug,
  title,
  author,
  desc,
}) => (
  <>
    <time className="text-gray-300 text-sm lg:text-base">
      {month} {day}, {year}
    </time>
    <header>
      <Link
        href={{
          pathname: "/blog/[slug]",
          query: { slug },
        }}
        passHref
      >
        <h3 className="title-text font-normal">{title}</h3>
      </Link>
    </header>
    <address className="not-italic text-white">{author}</address>
    {desc && <p className="text-gray-300 text-xs lg:text-sm mt-2">{desc}</p>}
  </>
);

export default BlogPostInfo;
