import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hero } from "./components/Hero/Hero";
import { Select } from "./components/Select/Select";
import { Think } from "./components/Think/Think";
import { Remote } from "./components/Remote/Remote";
import { Used } from "./components/Used/Used";
import { CircleLoader } from "react-spinners";
import { Footer } from "./components/Footer/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircleLoader color="#ffae33" size={100} />
        </div>
      ) : (
        <div>
          <Hero />
          <Select />
          <Think />
          <Remote />
          <Used />
        </div>
      )}
    </>
  );
}

export default App;
