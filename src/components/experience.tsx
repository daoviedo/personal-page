import { ExperienceCard } from './experience-card';
import { allExperience } from './experience-util';

function Experience() {
  return (
    <div
      id="experience"
      className="card-content motion-preset-blur-up motion-duration-1000 motion-delay-1000"
    >
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
