import { Skill } from './skills-util';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <div
      className="card motion-preset-blur-right"
      style={{ animationDelay: `${index * 200 + 300}ms` }}
    >
      <div className="text-4xl">{skill.component}</div>
      <p className="ml-1">{skill.name}</p>
    </div>
  );
};
