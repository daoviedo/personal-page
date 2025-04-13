import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../theme';
import { Button } from './button';
import { ScrollLink } from './scroll-link';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full h-14 flex fixed items-center justify-center text-sm font-medium bg-light-primary/50 dark:bg-dark-primary/50 backdrop-blur-xs z-11000">
      <ScrollLink
        to="#about"
        offset={-80}
        className="text-light-text-primary hover:text-dark-blue dark:hover:text-blue-400 dark:text-dark-text-primary p-3 transition-colors"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="#experience"
        offset={-80}
        className="text-light-text-primary hover:text-dark-blue dark:hover:text-blue-400 dark:text-dark-text-primary p-3 transition-colors"
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="#projects"
        offset={-80}
        className="text-light-text-primary hover:text-dark-blue dark:hover:text-blue-400 dark:text-dark-text-primary p-3 transition-colors"
      >
        Projects
      </ScrollLink>
      <Button
        className="text-base text-light-text-primary hover:text-dark-blue dark:hover:text-blue-400 dark:text-dark-text-primary p-3 transition-colors hover:cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FiMoon /> : <FiSun />}
      </Button>
    </div>
  );
}
export default Header;
