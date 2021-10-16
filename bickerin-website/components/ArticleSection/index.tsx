import React, { FunctionComponent } from 'react';
import FullScreen from '../ShortcutComps/FullScreen';
import CenterContent from '../ShortcutComps/CenterContent';

interface ArticleSectionProps {
  title: string;
  description: string;
  flipped?: boolean;
}

const ArticleSection: FunctionComponent<ArticleSectionProps> = (
  {title, description, children: extraComponents, flipped = false}
  ) => {
  const ExtraComponent = () => (
    <div className="self-center">
      {extraComponents}
    </div>
  );

  return (
    <FullScreen>
      <CenterContent>
        <div className="md:max-w-4xl px-6 flex flex-col gap-6 lg:gap-10">
          {flipped && <ExtraComponent />}
          <article className="flex flex-col gap-10">
            <header>
              <h2 className="article-title">{title}</h2>
            </header>
            <p className="article-desc">
              {description}
            </p>
          </article>
          {!flipped && <ExtraComponent />}
        </div>
      </CenterContent>
    </FullScreen>
  )
}

export default ArticleSection;