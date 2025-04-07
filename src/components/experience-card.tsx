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
    <div className="flex w-full h-full p-4">
      {/* icon and line */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={icon}
          className="size-12 outline-2 outline-dark-text-secondary"
        />
        <div
          data-last={last}
          className="flex-1 w-0.5 data-[last=true]:w-0 -mb-8 data-[last=true]:mb-0 bg-dark-text-secondary"
        ></div>
      </div>
      {/* body */}
      <div className="flex-1 flex flex-col">
        {/* header */}
        <div className="grid grid-flow-col grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 pl-3">
          <h2 className="text-xl">{name}</h2>
          <h3 className="font-light italic">{title}</h3>
          <h3 className="sm:text-end font-light">{duration}</h3>
          <h3 className="sm:text-end font-light italic">{location}</h3>
        </div>
        {/* body */}
        <div className="flex-1 ">
          <ul className="list-disc pl-8 font-light">
            {info.map(bulletPoint => (
              <li>{bulletPoint}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
