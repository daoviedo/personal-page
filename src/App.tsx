import About from './components/about';
import Experience from './components/experience';
import Header from './components/header';
import Skills from './components/skills';
import { skillMap } from './components/skills-util';

function App() {
  return (
    <>
      <div className="bg-light-primary dark:bg-dark-primary min-w-screen min-h-screen">
        <Header />
        <div className="flex flex-col pt-14 items-center">
          <About />
          <Skills skillMap={skillMap} />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
