import Navbar from "./component/navbar";
import Intro from "./component/Intro";
import Skills from "./component/Skills";
import Project from "./component/project";
import Contact from "./component/contact";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  );
}

export default App;
