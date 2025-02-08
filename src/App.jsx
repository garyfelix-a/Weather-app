import { useState } from "react";
import "./App.css";
import bgrain from "./assets/bgrain.mp4";
import DropDown from "./components/DropDown";
import cities from "./constants/cities.js";

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [randomCity, setRandomCity] = useState("");

  let city = search || randomCity || "";
  const [place, setPlace] = useState("");

  function handleSearch() {
    if(search)
    console.log(search);
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setPlace(city);
    setSearch("");
    setRandomCity("");
  }

  function handleSelect(city) {
    setRandomCity(city);
  }

  return (
    <div className="body">
      <video autoPlay muted loop id="bg-video">
        <source src={bgrain} type="video/mp4" />
      </video>
      <div>
        <div className="title">
          <h2>Weather Dashboard</h2>
        </div>
        <div className="weather">
          <div className="weather-area">
            <div className="left">
              <h2 style={{textAlign: "center", marginBottom: "10px", textTransform: "capitalize", color: "white", fontWeight: "lighter"}}>Here's your weather</h2>
              <div className="select-city">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Enter your city"
                    name="search"
                    value={search}
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                    required
                  />
                  <button onClick={handleSearch}>Search</button>
                </div>
                <p
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "white",
                    fontSize: "22px",
                  }}
                >
                  Or
                </p>
                {/* options */}
                <DropDown options={cities} onSelect={handleSelect} />
              </div>

              {/* name and country*/}
              <div className="place">
                <h2>{place}</h2>
              </div>

              {/* temp */}

              {/* weather description */}

              {/* min and max temp */}

              {/* wind degree and wind speed */}
            </div>
            <div className="right">
              <h2>right side</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
