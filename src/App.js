import './index.css';
import Slide from 'react-reveal/Slide';
import { Intro } from './Intro';
import { NewAbout } from './NewAbout';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function App() {
  const skillList1 = [
    {
      skill: "HTML",
      value: 90
    },
    {
      skill: "CSS",
      value: 90
    },
    {
      skill: "Bootstrap",
      value: 95
    },
    {
      skill: "Javascript & DOM",
      value: 90
    },
    {
      skill: "React Js",
      value: 80
    },
    {
      skill: "Node & Express Js",
      value: 65
    },
    {
      skill: "Mongo DB",
      value: 70
    },
    {
      skill: "My SQL",
      value: 60
    },
    {
      skill: "Amazon Web Services (AWS)",
      value: 50
    }
  ];

  return (
    <div className="App">
      <Slide top>
        <Intro />
        <NewAbout />
        <div className='container'>
          <h2 className='container-heading'>Professional Skills</h2>
          <h4 className='container-sub-heading'>⚡ Things I code with</h4>
          {skillList1.map(({ skill, value }) => <Skills skill={skill} value={value} />)}
          <br></br>
          <br></br>
        </div>
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Slide>
    </div>
  );
}

