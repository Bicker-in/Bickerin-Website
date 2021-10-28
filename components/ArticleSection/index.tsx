import React, { FunctionComponent } from "react";
import CenterContent from "../ShortcutComps/CenterContent";

interface ArticleSectionProps {
  title: string;
  description: string;
  flipped?: boolean;
}

const ArticleSection: FunctionComponent<ArticleSectionProps> = ({
  title,
  description,
  children: extraComponents,
  flipped = false,
}) => {
  const ExtraComponent = () => (
    <div className="self-center">{extraComponents}</div>
  );

  return (
    <CenterContent>
      <div className="md:max-w-4xl px-6 flex flex-col gap-y-14">
        {flipped && <ExtraComponent />}
        <article className="flex flex-col gap-4 text-center">
          <header>
            <h2 className="article-title">{title}</h2>
          </header>
          <p className="article-desc">{description}</p>
        </article>
        {!flipped && <ExtraComponent />}
      </div>
    </CenterContent>
  );
};

export default ArticleSection;
