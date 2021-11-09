import React, { FunctionComponent } from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/extensions
import textContent from '../../website-text-content.json';

interface TeamAvatarProps {
  name: string;
  imgURL: string;
}
const TeamAvatar: FunctionComponent<TeamAvatarProps> = ({ name, imgURL }) => (
  <li className="flex flex-row sm:gap-x-1 xl: gap-x-3">
    <Image
      src={imgURL ?? ''}
      alt={`Avatar Pic of ${name}`}
      className="rounded-full"
      width="50"
      height="50"
    />
    <h6 className="article-desc">{name}</h6>
  </li>
);

const TeamMembers: FunctionComponent = () => (
  <article className="w-full border-b-4 flex flex-row justify-center mb-56 sm:mb-0">
    <div className="relative top-20 text-white bg-matte-black border-4 p-4 rounded-lg">
      <header className="capitalize text-center font-primary-font lg:text-lg font-light">
        Built by fellow developers
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 p-3 pt-6">
        {textContent.teamMembers.map((teamMemberInfo) => (
          <TeamAvatar key={teamMemberInfo.name} {...teamMemberInfo} />
        ))}
      </ul>
    </div>
  </article>
);

export default TeamMembers;
