import { useEffect, useState } from "react";
import "./Components/Background/Background.jsx";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
const App = () => {
  let heroData = [
    { text1: "I'm", text2: "strong" },
    { text1: "You must", text2: "endure" },
    { text1: "Slave to", text2: "freedom" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
