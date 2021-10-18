import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import textContent from '../../website-text-content.json';

interface TeamAvatarProps {
  name: string;
  imgURL: string;
}
const TeamAvatar: FunctionComponent<TeamAvatarProps> = (
  {name, imgURL}
) => (
  <li className="flex flex-row sm:gap-x-1 xl: gap-x-3">
    <Image 
      src={imgURL ?? ""} 
      alt={`Avatar Pic of ${name}`} 
      className="rounded-full" 
      width="75" 
      height="75" 
    />
    <h6 className="article-desc">
      {name}
    </h6>
  </li>
);

const TeamMembers: FunctionComponent = () => {
  return (
    <article className="self-center w-10/12 lg:w-3/5 gap-4 lg:gap-16">
      <header>
        <h3 className="article-title">Team</h3>
      </header>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 p-3 pt-6">
        {textContent.teamMembers.map((teamMemberInfo) => (
          <TeamAvatar key={teamMemberInfo.name} {...teamMemberInfo}/>
        ))}
      </ul>
    </article>
  );
};

export default TeamMembers;