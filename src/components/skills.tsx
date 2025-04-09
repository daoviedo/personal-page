import { SkillCard } from './skill-card';
import { Skill } from './skills-util';

interface SkillsProps {
  skillMap: Skill[];
}
function Skills({ skillMap }: SkillsProps) {
  return (
    <div className="max-w-200 h-auto m-5 flex flex-wrap justify-center gap-3 ">
      {skillMap.map(skill => (
        <SkillCard skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

export default Skills;
