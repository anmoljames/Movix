import { useEffect } from "react";
import { fetchAPI } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAPIConfiguration } from "./store/homeSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchAPI("movie/popular").then((res) => {
      console.log(res);
      dispatch(getAPIConfiguration(res));
    });
  }, []);

  return (
    <>
      <h1>{url?.total_pages}</h1>
    </>
  );
}

export default App;
