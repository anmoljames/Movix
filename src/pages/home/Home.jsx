import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Treding";
function Home() {
  return (
    <div className="homePage">
      <HeroBanner></HeroBanner>
      <Trending></Trending>
    </div>
  );
}

export default Home;
