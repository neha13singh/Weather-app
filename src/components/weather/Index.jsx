import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=88b59dc6d9ce4a2ef0c2a5f720f94086`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("lucknow");
  }, []);

  return (
    <div className="weather-container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="weather-content">
          <div className="city-name">
            <h3>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h3>
          </div>
          <div className="date">{getCurrentDate()}</div>
          <div className="temp">
            {Math.round(weatherData?.main?.temp - 273.15)}°C
          </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <p className="humid">Humidity</p>
              <p className="humidData">{weatherData?.main?.humidity}%</p>
            </div>
            <div className="column">
              <p className="wind">Wind Speed</p>

              <p className="windData">{weatherData?.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
