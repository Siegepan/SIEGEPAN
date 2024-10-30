import "./App.css";
import Participar from "./components/Participar";
import Hero from "./components/Hero";
import Submissions from "./components/Submissions";
import Schedule from "./components/Schedule";

import Header from "./components/Header";
function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Submissions />
        <Schedule />
        <Participar />
      </div>
    </>
  );
}

export default App;
