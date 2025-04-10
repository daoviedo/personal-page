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
        className="text-light-text-secondary hover:text-light-text-primary hover:cursor-pointer dark:text-dark-text-secondary dark:hover:text-dark-text-primary p-3"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="#experience"
        offset={-80}
        className="text-light-text-secondary hover:text-light-text-primary hover:cursor-pointer dark:text-dark-text-secondary dark:hover:text-dark-text-primary p-3"
      >
        Experience
      </ScrollLink>
      <Button
        className="text-base text-light-text-secondary hover:text-light-text-primary hover:cursor-pointer dark:text-dark-text-secondary dark:hover:text-dark-text-primary p-3"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FiMoon /> : <FiSun />}
      </Button>
    </div>
  );
}
export default Header;
