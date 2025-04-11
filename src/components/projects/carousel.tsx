import { useRef } from 'react';
import { ProjectCard } from './project-card';
import { Button } from '../button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    <div className="w-full sm:max-w-200 p-5 sm:p-0 sm:my-5 relative">
      <h1
        id="projects"
        className="text-3xl font-semibold text-light-text-primary dark:text-dark-text-primary"
      >
        Projects
      </h1>
      <div
        ref={scrollRef}
        className="w-full sm:max-w-200 my-5 sm:w-auto flex overflow-x-auto space-x-5 no-scrollbar"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Button
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-2 bg-gray-500/50 p-2 rounded-full shadow hover:bg-gray-200/50"
        onClick={() => scroll('left')}
      >
        <FaChevronLeft size={24} />
      </Button>
      <Button
        className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-2 bg-gray-500/50 p-2 rounded-full shadow hover:bg-gray-200/50"
        onClick={() => scroll('right')}
      >
        <FaChevronRight size={24} />
      </Button>
    </div>
  );
}

export default Carousel;
