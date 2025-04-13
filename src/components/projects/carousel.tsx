import { useRef } from 'react';
import { ProjectCard } from './project-card';
import { Button } from '../button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects } from './projects';
import { CardProvider } from './card-provider';

function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // adjust this value to match card width + spacing
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="w-full sm:max-w-200 p-4 m-5 relative sm:border-2 sm:border-light-line sm:dark:border-dark-line rounded-[18px]">
      <h1
        id="projects"
        className="text-3xl font-semibold text-light-text-primary dark:text-dark-text-primary"
      >
        Projects
      </h1>
      <div className="relative">
        {/* Left Fade */}
        <div className="pointer-events-none absolute top-0 -left-2 h-full w-8 bg-gradient-to-r from-light-primary/100 dark:from-dark-primary/100 to-light-primary/0 dark:to-dark-primary/0 z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute top-0 -right-2 h-full w-8 bg-gradient-to-l from-light-primary/100 dark:from-dark-primary/100 to-light-primary/0 dark:to-dark-primary/0 z-10" />
        <div
          ref={scrollRef}
          className="w-full sm:max-w-200 py-5 sm:px-4 sm:w-auto flex overflow-x-auto space-x-5 no-scrollbar snap-x snap-mandatory sm:snap-none"
        >
          {projects.map(project => (
            <CardProvider key={project.name}>
              <ProjectCard {...project} />
            </CardProvider>
          ))}
        </div>
        <Button
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-2 bg-blue-700/50 dark:bg-blue-400/60 p-2 rounded-full hover:bg-blue-700/70 text-dark-text-primary z-100"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft size={24} />
        </Button>
        <Button
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-2 bg-blue-700/50 dark:bg-blue-400/60 p-2 rounded-full hover:bg-blue-700/70 text-dark-text-primary z-100"
          onClick={() => scroll('right')}
        >
          <FaChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
