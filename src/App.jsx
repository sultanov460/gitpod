import { Link } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Select } from "./components/Select/Select";
import { Think } from "./components/Think/Think";

function App() {
  return (
    <div>
      <Hero />
      <Select />
      <Think />
    </div>
  );
}

export default App;
