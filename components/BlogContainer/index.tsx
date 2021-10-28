import React, { FunctionComponent } from "react";

const BlogContainer: FunctionComponent = ({ children }) => (
  <div className="flex flex-row justify-center items-start pt-24">
    <article className="w-11/12 md:w-5/6 lg:w-4/6">{children}</article>
  </div>
);

export default BlogContainer;
