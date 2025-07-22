import { Link } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Select } from "./components/Select/Select";
import { Think } from "./components/Think/Think";
import { Remote } from "./components/Remote/Remote";

function App() {
  return (
    <div>
      <Hero />
      <Select />
      <Think />
      <Remote />
    </div>
  );
}

export default App;
