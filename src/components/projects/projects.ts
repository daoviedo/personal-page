import { ProjectCardProps } from './project-card';
import PersonalPage from '../../assets/personal-page.png';
import FuelPage from '../../assets/fuel.png';
import ExobuyPage from '../../assets/exobuy.png';

export const projects: ProjectCardProps[] = [
  {
    name: 'Portfolio',
    bg: PersonalPage,
    liveLink: 'https://www.daoviedo.com/',
    repoLink: 'https://github.com/daoviedo/personal-page',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'My personal portfolio showcasing me and my work.',
  },
  {
    name: 'Fuel Request',
    bg: FuelPage,
    liveLink: '',
    repoLink: 'https://github.com/daoviedo/fuel-quote-web-app',
    techStack: [
      'React.js',
      'JavaScript',
      'MaterialUI',
      'Node.js',
      'JWT',
      'mySQL',
    ],
    desc: 'A simulated oil distribution company that creates oil quotes which factors in competitor prices, distance, gallons, purchase history, etc.',
  },
  {
    name: 'Exobuy',
    bg: ExobuyPage,
    liveLink: '',
    repoLink: 'https://github.com/daoviedo/exobuy',
    techStack: [
      'React.js',
      'JavaScript',
      'MaterialUI',
      'Node.js',
      'JWT',
      'OracleDB',
    ],
    desc: 'An eCommerce platform where stores could add products and users could buy and order deliveries in Latin America.',
  },
];
