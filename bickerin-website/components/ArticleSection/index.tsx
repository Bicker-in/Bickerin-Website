import React, { FunctionComponent } from 'react';
import Button from '../Button';

interface ArticleSectionProps {
  title: string;
  description: string;
}

const ArticleSection: FunctionComponent<ArticleSectionProps> = (
  {title, description, children: extraComponents}
  ) => {
  return (
    <article>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="md:max-w-4xl px-4 flex flex-col gap-6 lg:gap-14">
          <h2 className="article-title">{title}</h2>
          <p className="article-desc">
            {description}
          </p>
          <div className="self-center">
            {extraComponents}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ArticleSection;