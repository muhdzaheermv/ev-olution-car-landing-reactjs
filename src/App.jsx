import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";




export const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "What you love" },
    { text1: "indulge", text2: "Your Passions" },
    { text1: "Drive into", text2: "What you love" },
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus} />
    </div>
  )
}

export default App;
