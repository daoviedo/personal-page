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
      className="relative shrink-0 w-[300px] h-[450px] rounded-[18px] border-1 border-light-line dark:border-dark-line shadow-light-shadow dark:shadow-none motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-[103%] snap-start"
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'local',
      }}
    >
      {/* Hidden description overlay */}
      <div
        data-isclicked={isClicked}
        className="absolute inset-0 flex flex-col items-center justify-between bg-black/80 text-dark-text-primary text-center text-sm p-4 opacity-0 hover:opacity-100 data-[isClicked=true]:opacity-100 sm:data-[isclicked=true]:opacity-0 hover:sm:data-[isclicked=true]:opacity-100 transition-opacity duration-300 rounded-[18px]"
      >
        <div className="text-center font-semibold text-dark-text-primary text-xl p-4">
          {name}
        </div>
        {desc}
        <div
          data-isclicked={isClicked}
          className="flex mt-2 space-x-3 data-[isclicked=false]:pointer-events-none  sm:data-[isclicked=false]:pointer-events-auto"
        >
          {liveLink !== '' && (
            <Button
              href={liveLink}
              className="flex justify-center items-center px-2 py-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110 border-1 border-dark-line rounded-[18px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgMediaLive className="text-dark-red mr-1" />
              {'Live'}
            </Button>
          )}
          <Button
            href={repoLink}
            className="flex justify-center items-center px-2 py-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110 font-mono border-1 border-dark-line rounded-[18px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbSourceCode className="text-dark-green mr-1 text-[16px]" />
            {'Source'}
          </Button>
        </div>
        <div className="text-center p-3 font-light text-sm flex flex-wrap justify-center gap-1">
          {techStack.map(tech => (
            <span
              key={tech}
              className="bg-dark-blue rounded-xl px-1.5 py-0.5 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
