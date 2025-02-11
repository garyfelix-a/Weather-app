import "./Weather.css";

import { useState } from "react";
import DropDown from "./DropDown";
import cities from "../constants/cities.js";
import bg from "../assets/bg.png";

const api = {
  key: import.meta.env.VITE_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [randomCity, setRandomCity] = useState("");
  const [weather, setWeather] = useState({});
  const [place, setPlace] = useState("");

  let city = search || randomCity || "";

  function handleSearchInput(e) {
    if (randomCity) {
      alert(
        "You can either choose one city or enter a cityYou can either select a city from the dropdown or enter a city manually, not both.!"
      );
      return;
    }
    setSearch(e.target.value);
  }

  function handleSearch() {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setWeather(data);
      });

    setPlace(city);
    setSearch("");
    setRandomCity("");
  }

  function handleSelect(city) {
    setRandomCity(city);
  }

  const backgroundImg =
  weather?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : bg;

  return (
    <div className="main" style={{backgroundImage: `url(${backgroundImg})`}}>
      <div className="weather">
        <div className="title">
          <h2>Weather Dashboard</h2>
        </div>
        <div className="weather-area">
          <div className="left">
            <div className="select-city">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Enter your city"
                  name="search"
                  value={search}
                  autoComplete="off"
                  onChange={handleSearchInput}
                  required
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              <p
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  color: "black",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              >
                Or
              </p>
              <DropDown
                options={cities}
                onSelect={handleSelect}
                value={randomCity}
              />
            </div>

            {typeof weather.main !== "undefined" ? (
              <div className="weather-data">
                <div className="place">
                  <h2>
                    {place}, {weather.sys.country}
                  </h2>
                </div>
                <div className="temp">
                  <div className="temp-img">
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                    />
                  </div>
                  <div className="temp-num">
                    <h2>
                      {weather.main.temp}
                      <span>°C</span>
                    </h2>
                    <div className="min-max-temp">
                      <h2>
                        <span>Max : </span>
                        {weather.main.temp_max}
                        <span>°C</span>
                      </h2>
                      <h2>
                      <span>Min : </span>
                        {weather.main.temp_min}
                        <span>°C</span>
                      </h2>
                      <h2>
                      <span>Hum : </span>
                        {weather.main.humidity}
                        <span>%</span>
                      </h2>
                    </div>
                  </div>
                  <div className="temp-desc">
                    <h2>{weather.weather[0].main}</h2>
                    <h2>{weather.weather[0].description}</h2>
                  </div>
                  <div className="wind-speed">
                    <h2>Wind Speed : {weather.wind.speed}</h2>
                    <h2>Wind Degree : {weather.wind.deg} °</h2>
                  </div>
                  <div className="abbreviation">
                    <p>Max - Maximum Temperation, Min - Minimum Temperature, Hum - Humidiy</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="instructions">
                <h2>Please enter a city or select a city from dropdown</h2>
                <h2>or click on the dropdown to get a random city weather.</h2>
                <h2>
                  Note: You can choose either one.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
