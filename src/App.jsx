import { useEffect } from "react";
import { fetchAPI } from "./utils/api";

import "./App.css";

function App() {
  useEffect(() => {
    fetchAPI("movie/popular").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
