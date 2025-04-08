export interface ExperienceCardProps {
  name: string;
  icon?: string;
  title: string;
  duration: string;
  location: string;
  info: string[];
  last?: boolean;
}
export const ExperienceCard = ({
  name,
  icon,
  title,
  duration,
  location,
  info,
  last = false,
}: ExperienceCardProps) => {
  return (
    <div className="sm:flex w-full h-full p-4">
      {/* icon and line */}
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
        <img
          src={icon}
          className="size-20 sm:size-12 outline-2 outline-light-text-secondary dark:outline-dark-text-secondary absolute sm:static"
        />
        <div
          data-last={last}
          className="flex-1 h-0 w-0 sm:w-0.5 sm:data-[last=true]:w-0 sm:-mb-8 sm:data-[last=true]:mb-0 bg-light-text-secondary dark:bg-dark-text-secondary"
        ></div>
      </div>
      {/* body */}
      <div className="flex-1 flex flex-col">
        {/* header */}
        <div className="grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 pl-24 sm:pl-3 -mt-2 sm:-mt-1">
          <h2 className="text-lg font-medium sm:text-xl">{name}</h2>
          <h3 className="italic self-center text-light-text-secondary dark:text-dark-text-secondary">
            {title}
          </h3>
          <h3 className="sm:text-end text-sm py-0 self-center font-extralight">
            {duration}
          </h3>
          <h3 className="sm:text-end text-sm italic py-0 self-center font-extralight">
            {location}
          </h3>
        </div>
        {/* body */}
        <div className="flex-1 ">
          <ul className="list-disc sm:pl-8 text-sm font-light pt-2 text-light-text-primary dark:text-dark-text-secondary">
            {info.map(bulletPoint => (
              <li>{bulletPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
