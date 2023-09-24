import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./herobanner.scss";
function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and peoples to discover. Exlpore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or a TV show....."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
