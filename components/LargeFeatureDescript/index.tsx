import React, { FunctionComponent } from 'react';

interface LargeFeatureDescriptProps {
  title: string;
  desc: string;
  reverse?: boolean;
}

const LargeFeatureDescript: FunctionComponent<LargeFeatureDescriptProps> = ({
  title,
  desc,
  reverse = false,
  children,
}) => {
  const rowOrder = reverse ? 'flex-row-reverse' : 'flex-row';
  const textSpace = reverse ? 'mr-5' : 'ml-5';
  const textAlign = reverse ? 'text-right' : 'text-left';

  return (
    <article
      className={`hidden md:flex ${rowOrder} justify-end gap-10 lg:gap-20 items-center`}
    >
      <div className={`flex flex-col ${textAlign} ${textSpace} gap-5 max-w-md`}>
        <header>
          <h1 className="font-primary-font text-white text-3xl lg:text-5xl font-normal">
            {title}
          </h1>
        </header>
        <p className="max-w-4xl text-base lg:text-lg md:max-w-xl text-light-gray">
          {desc}
        </p>
      </div>
      {children}
    </article>
  );
};

LargeFeatureDescript.defaultProps = {
  reverse: false,
};

export default LargeFeatureDescript;
