import React, {FunctionComponent} from 'react';


const BlogContainer: FunctionComponent = ({children}) => (
  <div className="flex flex-col items-center mt-4">
    <article className="w-11/12 md:w-5/6 lg:w-4/6">
      {children}
    </article>
  </div>
);

export default BlogContainer;