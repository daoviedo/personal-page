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
  { name: 'React.js', component: <DiReact /> },
  { name: 'TypeScript', component: <SiTypescript className="text-2xl mr-1" /> },
  { name: 'JavaScript', component: <SiJavascript className="text-2xl mr-1" /> },
  { name: 'HTML', component: <DiHtml5 /> },
  { name: 'CSS', component: <DiCss3 /> },
  {
    name: 'Tailwind CSS',
    component: <RiTailwindCssFill className="text-3xl mr-1" />,
  },
  { name: 'Node.js', component: <DiNodejsSmall /> },
  { name: 'Jest', component: <SiJest className="text-3xl" /> },
  { name: 'Git', component: <DiGit /> },
  { name: '', component: <FaAws className="-mr-1" /> },
];
