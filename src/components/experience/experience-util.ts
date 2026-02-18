import { ExperienceCardProps } from './experience-card';
import JPMCLogo from '../../assets/jpmc.png';
import AmexLogo from '../../assets/amex.png';
import CNLogo from '../../assets/cn.png';
import TrumidLogo from '../../assets/trumid.png'

export const allExperience: ExperienceCardProps[] = [
  {
    name: 'Trumid',
    icon: TrumidLogo,
    title: 'Frontend Engineer',
    duration: 'May 2025 - Present',
    location: 'Remote',
    info: [
      'Frontend React engineer on Trumid’s Portfolio Trading platform, building real-time interfaces used for institutional bond and portfolio trading.',
      'Own core trading workflows and UI architecture, focusing on performance, reliability, and scalable patterns across data-heavy, latency-sensitive screens.',
    ],
  },
  {
    name: 'JPMorgan Chase & Co.',
    icon: JPMCLogo,
    title: 'Software Engineer II',
    duration: 'Jul 2020 - May 2025',
    location: 'Houston, TX',
    info: [
      'Built from scratch one of JPMorgan’s primary Futures & Options UI trading platforms used by global internal desks.',
      'Focused on real-time systems, cross-application trading workflows, and modern frontend architecture for high-frequency market environments.',
    ],
  },
  {
    name: 'American Express',
    icon: AmexLogo,
    title: 'Software Engineer Intern',
    duration: 'Jun 2019 - Aug 2019',
    location: 'Phoenix, AZ',
    info: [
      'Built internal monitoring and alerting dashboards for real-time credit card processing systems, improving visibility into production failures and system health.',
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
