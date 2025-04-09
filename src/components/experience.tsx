import { ExperienceCard } from './experience-card';
import { allExperience } from './experience-util';

function Experience() {
  return (
    <div className="card-content">
      <h1 className="text-3xl font-semibold">Experience</h1>
      {allExperience.map((exp, iteration) => (
        <ExperienceCard
          {...exp}
          last={iteration === allExperience.length - 1}
          key={exp.name}
        />
      ))}
    </div>
  );
}

export default Experience;
