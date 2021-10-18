import React, { FunctionComponent } from 'react';
import textContent from '../../website-text-content.json';

const statusColors: {[key: string]: string} = {};

type Statuses = "Todo" | "In Progress" | "Released";

textContent.roadMapMilestonesStatuses.forEach(({name, color}) => {
  statusColors[name] = name;
});

interface StatusColorDotProps {
  status: Statuses;
}
const StatusColorDot: FunctionComponent<StatusColorDotProps> = (
  {status}
) => {
  console.log(status);
  switch(status) {
    case 'Todo':
      console.log("sad");
      return <div className="todo-dot-color status-dot-shape" />;
    case 'In Progress':
      return <div className="inprogress-dot-color status-dot-shape" />;
    case 'Released':
      return <div className="released-dot-color status-dot-shape" />;
    default:
      return <div className=" bg-indigo-100 status-dot-shape" />;
  }

};
console.log("asd");
interface MilestoneStatusItemProps {
  title: Statuses;
}
const MilestoneStatusItem: FunctionComponent<MilestoneStatusItemProps> = (
  {title}
  ) => (
  <li className="flex flex-row gap-x-2 items-center font-primary-font font-light text-xs md:text-lg lg:text-xl text-white">
    <StatusColorDot status={title} />
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
      <StatusColorDot status={status as Statuses}/>
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
          {textContent.roadMapMilestonesStatuses.map(({name}) => (
            <MilestoneStatusItem 
              key={name} 
              title={name as Statuses} 
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