import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from './button';
import Resume from '../assets/Daniel_Oviedo_Resume.pdf';
import { IoIosCall, IoIosMail, IoMdDownload } from 'react-icons/io';

function Contact() {
  return (
    <div className="flex flex-wrap gap-2 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 mb-4 text-sm font-light text-light-text-primary dark:text-dark-text-primary motion-preset-pop motion-delay-1500 mt-2 sm:mt-4">
      <Button
        href="tel:+14072427791"
        className="p-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosCall size={24} />
      </Button>
      <Button
        href="mailto:daniel.a2006@hotmail.com"
        className="p-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail size={24} />
      </Button>
      <Button
        href="https://www.linkedin.com/in/daoviedo/"
        className="p-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </Button>
      <Button
        href="https://github.com/daoviedo"
        className="p-2 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </Button>
      <Button
        href={Resume}
        download
        rel="noopener noreferrer"
        className="flex justify-center items-center p-2 mx-2 bg-dark-blue text-dark-text-primary rounded-lg hover:bg-blue-700 transition-colors motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out hover:scale-110"
      >
        <IoMdDownload className="mr-1" />
        {'Resume'}
      </Button>
    </div>
  );
}

export default Contact;
