import React, { FunctionComponent } from 'react';
import textContent from '../../website-text-content.json';

const statusColors: {[key: string]: string} = {};

textContent.roadMapMilestonesStatuses.forEach(({name, color}) => {
  statusColors[name] = color;
});

interface StatusColorDotProps {
  color: string;
}
const StatusColorDot: FunctionComponent<StatusColorDotProps> = (
  {color}
) => (
  <div className={`${color} w-4 h-4 md:w-5 md:h-5 rounded-full`} />
);

interface MilestoneStatusItemProps {
  title: string;
  color: string;
}
const MilestoneStatusItem: FunctionComponent<MilestoneStatusItemProps> = (
  {title, color}
  ) => (
  <li className="flex flex-row gap-x-2 items-center font-primary-font font-light text-xs md:text-lg lg:text-xl text-white">
    <StatusColorDot color={color} />
    {title}
  </li>
);

interface MilestoneItemProps {
  name: string;
  status: string;
};
const MilestoneItem: FunctionComponent<MilestoneItemProps> = (
  {name, status}
  ) => (
    <li className="bg-matte-black text-white text-lg lg:text-xl rounded-md p-3 flex flex-row items-center gap-x-4">
      {name}
      <StatusColorDot color={statusColors[status]}/>
    </li>
);

const RoadMap: FunctionComponent = () => {
  return (
    <article className="flex flex-col items-center">
      <div className="lg:w-3/5 xl:w-2/4 w-10/12">
        <header>
          <h2 className="article-title">Road Map</h2>
        </header>
        <ul className="flex w-full flex-row mt-4 gap-x-2 lg:gap-x-5">
          {textContent.roadMapMilestonesStatuses.map(({name, color}) => (
            <MilestoneStatusItem 
              key={name} 
              title={name} 
              color={color} 
            />)
          )}
        </ul>     
        <ul className="self-start gap-y-2 flex flex-col mt-4">
          {textContent.roadMapMilestones.map(({name, status}) => (
            <MilestoneItem key={name} name={name} status={status} />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default RoadMap;