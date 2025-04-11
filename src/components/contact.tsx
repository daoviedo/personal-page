import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from './button';
import Resume from '../assets/Daniel_Oviedo_Resume.pdf';
import { IoIosCall, IoIosMail } from 'react-icons/io';

function Contact() {
  return (
    <div className="flex flex-wrap space-x-2 space-y-1 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 mb-4 text-sm font-light text-light-text-secondary dark:text-dark-text-secondary motion-preset-pop motion-delay-1500 mt-2 sm:mt-4">
      <Button
        href="tel:+14072427791"
        className="flex justify-center items-center p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosCall className="mr-1" />
        {'(407) 242-7791'}
      </Button>
      <Button
        href="mailto:daniel.a2006@hotmail.com"
        className="flex justify-center items-center p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail className="mr-1" />
        {'daniel.a2006@hotmail.com'}
      </Button>
      <Button
        href="https://www.linkedin.com/in/daoviedo/"
        className="p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </Button>
      <Button
        href="https://github.com/daoviedo"
        className="p-2 hover:text-light-text-primary hover:dark:text-dark-text-primary motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </Button>
      <Button
        href={Resume}
        download
        className="p-2 mx-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
      >
        Resume
      </Button>
    </div>
  );
}

export default Contact;
