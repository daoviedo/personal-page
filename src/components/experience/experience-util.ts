import { ExperienceCardProps } from './experience-card';
import JPMCLogo from '../../assets/jpmc.png';
import AmexLogo from '../../assets/amex.png';
import CNLogo from '../../assets/cn.png';

export const allExperience: ExperienceCardProps[] = [
  {
    name: 'JPMorgan Chase & Co.',
    icon: JPMCLogo,
    title: 'Software Engineer II',
    duration: 'Jul 2020 - Present',
    location: 'Houston, TX',
    info: [
      'Built and maintained multiple React applications used by traders to execute trades, track trade records, and monitor real-time market data across exchanges.',
      'Developed a cross-app communication service using RxJS and OpenFin interop.',
      'Integrated AG Grid with features like pagination, caching, virtualization, and lazy loading to efficiently handle large datasets across apps.',
      'Rolled out Storybook.js to document and demo reusable UI components, streamlining development and collaboration with other teams.',
      'Contributed to JPMC’s internal UI toolkit with custom components and enhancements adopted by teams across the firm.',
    ],
  },
  {
    name: 'American Express',
    icon: AmexLogo,
    title: 'Software Engineer Intern',
    duration: 'Jun 2019 - Aug 2019',
    location: 'Phoenix, AZ',
    info: [
      'Designed and developed a full-stack web application using React.js, Node.js/Express.js, and MongoDB to monitor credit card processing servers, providing real-time updates on system warnings and failures to prevent transaction delays and cancellations, ultimately improving system stability.',
      'Developed health-check APIs for multiple services and microservices, which were extensively utilized during stress tests and back-end service monitoring.',
    ],
  },
  {
    name: 'Code Ninjas',
    icon: CNLogo,
    title: 'Coding Instructor',
    duration: 'Jun 2018 - Aug 2018',
    location: 'Sugar Land, TX',
    info: [
      'Led multiple summer camps, teaching children coding fundamentals using JavaScript and Scratch programming.',
    ],
  },
];
