import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums, fetchSongs, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

const App = () => {
  const [data, setData] = useState({});

  const generateData = async (key, source) => {
    const response = await source();

    setData((prevState) => {
      return { ...prevState, [key]: response };
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  // console.log(data);
  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        {/* outlet will refer to home page as it is on same route "/"  */}
        <Outlet context={{ data }} />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
