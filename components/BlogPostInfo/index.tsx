import Link from "next/link";
import React, { FunctionComponent } from "react";
import textContent from "../../website-text-content.json";
import { BlogFrontMatterData } from "../../types/pages/blog.d";
import AvatarPic from "../AvatarPic";

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
}) => {
  const authorImgURL =
    textContent.teamMembers.find(({ name }) => name === author)?.imgURL ?? "";

  return (
    <>
      <time className="text-gray-300 text-sm lg:text-base">
        {month} {day}, {year}
      </time>
      <header className="pb-3">
        <Link
          href={{
            pathname: "/blog/[slug]",
            query: { slug },
          }}
          passHref
        >
          <h3 className="blog-post-title">
            {title}
          </h3>
        </Link>
      </header>
      <address className="not-italic text-white flex flex-row items-center gap-x-2">
        <div className="w-5 lg:w-10">
          <AvatarPic authorName={author} authorImgURL={authorImgURL} />
        </div>
        {author}
      </address>
      {desc && <p className="text-gray-300 text-xs lg:text-sm mt-2">{desc}</p>}
    </>
  );
};

export default BlogPostInfo;
