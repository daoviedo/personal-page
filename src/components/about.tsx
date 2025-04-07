import self from '../assets/self.jpg';
import Map from './map';
import { MdLocationPin } from 'react-icons/md';
function About() {
  return (
    <div className="card-content p-0">
      <img
        src={self}
        className="size-36 rounded-full outline-6 outline-light-secondary dark:outline-dark-secondary outline-solid absolute top-40 ml-4 z-10000"
      />
      <div className="w-full h-40">
        <Map />
      </div>
      <div className="flex flex-col h-auto">
        <p className="flex items-center justify-end sm:justify-center text-xs sm:text-xl  pt-4 mr-4 ml-4">
          <MdLocationPin className="mr-1 size-8" />
          Houston, TX, United States
        </p>
        <div className="flex-1 pt-11 sm:pt-8 px-4">
          <h1 className="font-semibold text-3xl">Daniel Oviedo</h1>
          <h2 className="font-light text-lg text-gray-900 dark:text-dark-text-secondary">
            Software Engineer II at JPMorgan Chase & Co.
          </h2>

          <p className="my-4 font-light pt-2">
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
