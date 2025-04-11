import About from './components/about';
import Experience from './components/experience/experience';
import Header from './components/header';
import Carousel from './components/projects/carousel';
import Skills from './components/skills/skills';
import { skillMap } from './components/skills/skills-util';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-14 items-center">
        <About />
        <Skills skillMap={skillMap} />
        <Experience />
        <Carousel />
      </div>
    </>
  );
}

export default App;
