import About from './components/about';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import { skillMap } from './components/skills-util';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-14 items-center">
        <About />
        <Skills skillMap={skillMap} />
        <Experience />
      </div>
    </>
  );
}

export default App;
