import React from 'react';
import { DiCss3, DiGit, DiHtml5, DiNodejsSmall, DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript, SiJest, SiTypescript } from 'react-icons/si';
export interface Skill {
  name: string;
  component: React.JSX.Element;
}
export const skillMap: Skill[] = [
  { name: 'React.js', component: <DiReact className="text-[#61DBFB]" /> },
  {
    name: 'TypeScript',
    component: <SiTypescript className="text-2xl mr-1 text-[#007acc]" />,
  },
  {
    name: 'JavaScript',
    component: <SiJavascript className="text-2xl mr-1 text-[#f7df1e]" />,
  },
  { name: 'HTML', component: <DiHtml5 className="text-[#e34c26]" /> },
  { name: 'CSS', component: <DiCss3 className="text-[#264de4]" /> },
  {
    name: 'Tailwind CSS',
    component: <RiTailwindCssFill className="text-3xl mr-1 text-[#38bdf8]" />,
  },
  { name: 'Node.js', component: <DiNodejsSmall className="text-[#6cc24a]" /> },
  { name: 'Jest', component: <SiJest className="text-3xl text-[#C21225]" /> },
  { name: 'Git', component: <DiGit className="text-[#F05033]" /> },
  { name: '', component: <FaAws className="-mr-1 text-[#FF9900]" /> },
];
