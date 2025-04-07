import { Skill } from './skills-util';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="card">
      <div className="text-4xl">{skill.component}</div>
      <p className="ml-1">{skill.name}</p>
    </div>
  );
};
