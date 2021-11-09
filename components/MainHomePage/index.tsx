import React, { FunctionComponent } from 'react';
import Button from '../Button';
import CenterFullScreen from '../ShortcutComps/CenterFullScreen';
import TeamMembers from '../TeamMembers';
// eslint-disable-next-line import/extensions
import textContent from '../../website-text-content.json';

const MainHomePage: FunctionComponent = () => (
  <CenterFullScreen>
    <div className="md:max-w-4xl px-6 flex flex-col gap-y-14">
      <article className="flex flex-col gap-4 text-center">
        <header>
          <h2 className="article-title">{textContent.mainHomepageTitle}</h2>
        </header>
        <p className="article-desc">{textContent.mainHomepageDesc}</p>
      </article>
    </div>
    <Button>
      <h3 className="font-primary-font text-lg lg:text-3xl">
        Sign Up For Beta -&gt;
      </h3>
    </Button>
    <TeamMembers />
  </CenterFullScreen>
);

export default MainHomePage;
