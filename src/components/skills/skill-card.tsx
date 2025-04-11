import { Skill } from './skills-util';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="card motion-preset-pop motion-duration-700">
      <div className="text-4xl">{skill.component}</div>
      <p className="ml-1">{skill.name}</p>
    </div>
  );
};
