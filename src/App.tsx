import Bio from "./component/bio/Bio";
import Social from "./component/social/Social";
import Skills from "./component/skills/Skills";
import Experience from "./component/experience/Experience";
import Education from "./component/education/Education";
import "./App.scss";
import Languages from "./component/languages/Languages";

function App() {
  return (
    <div className="app">
      <Bio />
      <Social />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <div className="app__footer_marker">
        <hr />X
        <hr />
      </div>
    </div>
  );
}

export default App;
