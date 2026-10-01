import { Header } from "./components/sections/Header";
import { AboutMe } from "./components/sections/AboutMe";
import { Career } from "./components/sections/Career";
import { Qualifications } from "./components/sections/Qualifications";
import { Projects } from "./components/sections/Projects";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Career />
      <Qualifications />
      <Projects />
    </div>
  );
}

export default App;
