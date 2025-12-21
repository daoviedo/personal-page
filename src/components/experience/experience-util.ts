import { ExperienceCardProps } from './experience-card';
import JPMCLogo from '../../assets/jpmc.png';
import AmexLogo from '../../assets/amex.png';
import CNLogo from '../../assets/cn.png';
import TrumidLogo from '../../assets/trumid.png'

export const allExperience: ExperienceCardProps[] = [
  {
    name: 'Trumid',
    icon: TrumidLogo,
    title: 'Software Engineer II',
    duration: 'May 2025 - Present',
    location: 'Remote',
    info: [
      'Contributing to the development of Trumid’s Portfolio Trading application, a React-based platform used for portfolio trading, supporting complex trading workflows and real-time market interactions.',
      'Improving UI performance and responsiveness by optimizing state subscriptions and render paths in data-heavy views, ensuring stable behavior under frequent market and user-driven updates.',
      'Building and enhancing interactive trading interfaces and data-driven components, focusing on usability, UI/UX, and clear presentation of portfolio and bond information.',
      'Expanding and maintaining automated test coverage across unit, integration, and e2e testing.',
      'Collaborating cross-functionally with product, backend, and QA to refine trading workflows and ensure frontend behavior aligned with business and market requirements.',
      'Contributing to internal AI developer tooling by enhancing knowledge files and usage guidelines, improving the quality, consistency, and usefulness of AI tooling.',
    ],
  },
  {
    name: 'JPMorgan Chase & Co.',
    icon: JPMCLogo,
    title: 'Software Engineer II',
    duration: 'Jul 2020 - May 2025',
    location: 'Houston, TX',
    info: [
      'Owned the development of real-time React trading applications used daily by hundreds of internal traders, delivering low-latency market data visualization and trade execution capabilities across exchanges.',
      'Architected a real-time cross-app communication framework using RxJS and OpenFin, enabling seamless data synchronization between desktop trading applications and reducing manual workflow overhead.',
      'Improved frontend performance for high-frequency market data by leveraging AG Grid virtualization, intelligent caching, and async loading, ensuring consistent UI responsiveness under heavy data loads.',
      'Drove the retirement of legacy trading systems, leading frontend migrations to a modern React architecture that reduced operational costs and improved system reliability.',
      'Defined frontend testing and quality standards across applications using TypeScript, Jest, and React Testing Library, improving long-term maintainability.',
      'Helped scale JPMC’s internal design system by contributing shared components and patterns adopted across multiple trading teams.',
    ],
  },
  {
    name: 'American Express',
    icon: AmexLogo,
    title: 'Software Engineer Intern',
    duration: 'Jun 2019 - Aug 2019',
    location: 'Phoenix, AZ',
    info: [
      'Built a full-stack React and Node.js application to monitor credit card processing services, displaying real-time warnings and failures to support faster issue triage.',
      'Developed RESTful health-check endpoints used during stress tests and backend service monitoring.',
      'Implemented frontend dashboards to visualize service status and alerts, improving engineers’ ability to detect and investigate system issues.',
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
