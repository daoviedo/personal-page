import { JSX } from 'react';
import { useCardState } from './use-card-state';
import { Button } from '../button';
import { CgMediaLive } from 'react-icons/cg';
import { TbSourceCode } from 'react-icons/tb';

export interface ProjectCardProps {
  name: string;
  bg: string;
  liveLink: string;
  repoLink: string;
  techStack: string[];
  desc: string;
}
export const ProjectCard = ({
  name,
  bg,
  techStack,
  desc,
  liveLink,
  repoLink,
}: ProjectCardProps): JSX.Element => {
  const { isClicked, toggleClicked } = useCardState();
  return (
    <div
      onClick={toggleClicked}
      className="relative shrink-0 w-[300px] h-[450px] rounded-[18px] border-1 border-gray-800 dark:border-gray-400 flex flex-col justify-between shadow-light-shadow dark:shadow-dark-shadow motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-[103%] snap-start"
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'local',
      }}
    >
      <div className="text-center font-semibold backdrop-blur-[2px] rounded-t-[18px] text-light-text-primary dark:text-dark-text-primary text-xl p-4">
        <span className="bg-light-secondary dark:bg-dark-secondary rounded-3xl shadow-light-shadow dark:shadow-dark-shadow px-3 py-1.5">
          {name}
        </span>
      </div>
      <div className="w-full backdrop-blur-[2px] rounded-b-[18px] text-center p-3 font-light text-sm text-dark-text-primary flex flex-wrap justify-center gap-1">
        {techStack.map(tech => (
          <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 rounded-xl shadow-light-shadow dark:shadow-dark-shadow px-1.5 py-0.5 font-mono">
            {tech}
          </span>
        ))}
      </div>
      {/* Hidden description overlay */}
      <div
        data-isClicked={isClicked}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white text-center text-sm p-4 opacity-0 hover:opacity-100 data-[isClicked=true]:opacity-100 sm:data-[isClicked=true]:opacity-0 hover:sm:data-[isClicked=true]:opacity-100 transition-opacity duration-300 rounded-[18px]"
      >
        {desc}
        <div className="flex mt-2">
          {liveLink !== '' && (
            <Button
              href={liveLink}
              className="flex justify-center items-center p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMediaLive className="text-red-500 mr-1" />
              {'Live'}
            </Button>
          )}
          <Button
            href={repoLink}
            className="flex justify-center items-center p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110 font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbSourceCode className="text-green-500 mr-1 text-[16px]" />
            {'Source'}
          </Button>
        </div>
      </div>
    </div>
  );
};
