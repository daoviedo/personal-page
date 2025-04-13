import About from './components/about';
import Experience from './components/experience/experience';
import Header from './components/header';
import ParticleProvider from './components/particle-provider';
import Carousel from './components/projects/carousel';
import Skills from './components/skills/skills';
import { skillMap } from './components/skills/skills-util';

function App() {
  return (
    <ParticleProvider>
      <Header />
      <div className="flex flex-col pt-14 items-center">
        <About />
        <Skills skillMap={skillMap} />
        <Experience />
        <Carousel />
      </div>
    </ParticleProvider>
  );
}

export default App;
