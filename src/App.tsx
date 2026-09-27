import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Career } from "./components/Career";
import { Qualifications } from "./components/Qualifications";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Career />
      <Qualifications />
    </div>
  );
}

export default App;
