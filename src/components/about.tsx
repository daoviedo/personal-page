import self from '../assets/self.jpg';
import Map from './map';
import { MdLocationPin } from 'react-icons/md';
function About() {
  return (
    <div id="about" className="card-content p-0">
      <img
        src={self}
        className="size-36 rounded-full outline-6 outline-light-secondary dark:outline-dark-secondary outline-solid absolute top-40 ml-4 z-10000"
      />
      <div className="w-full h-40">
        <Map />
      </div>
      <div className="flex flex-col h-auto">
        <p className="flex items-center justify-end sm:justify-center text-xs sm:text-lg pt-4 mx-4 text-light-text-secondary dark:text-dark-text-secondary">
          <MdLocationPin className="mr-1 size-5 sm:size-6 animate-bounce" />
          Houston, TX, United States
        </p>
        <div className="flex-1 pt-11 sm:pt-8 px-4">
          <h1 className="font-black text-4xl motion-preset-blur-up">
            Daniel Oviedo
          </h1>
          <h2 className="flex flex-col sm:block sm:flex-row font-light text-lg text-light-text-secondary dark:text-dark-text-secondary motion-preset-blur-up motion-duration-1000 motion-translate-y-in-50 motion-delay-300">
            Software Engineer II at{' '}
            <span className="inline-block font-light text-lg overflow-hidden whitespace-nowrap font-mono animate-typing border-r-2 h-6 -mb-1 border-r-light-text-secondary dark:border-r-dark-text-secondary">
              JPMorgan Chase & Co.
            </span>
          </h2>

          <p className="my-4 text-sm font-light text-light-text-primary dark:text-dark-text-secondary motion-preset-blur-up motion-duration-1000 motion-translate-y-in-25 sm:motion-translate-y-in-50 motion-delay-700">
            I am a software engineer with 5 years of experience, specializing in
            building UI applications. I have worked at leading fintech
            companies, designing and delivering large-scale React applications
            in production for thousands of users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
