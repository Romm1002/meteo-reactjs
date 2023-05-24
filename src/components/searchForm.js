import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "../components/weatherDisplay";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "daec8b2f6abe31f4fc66091a92a6edda";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}&lang=fr`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError(
          "Une erreur est survenue lors de la récupération des données météorologiques."
        );
        setWeatherData(null);
      }
    };

    if (city !== "") {
      fetchWeatherData();
    }
  }, [city, unit]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <>
      <nav>
        <div className="container">
          <form onSubmit={handleSubmit} className="formSearch">
            <div className="searchBox">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ville..."
              />
              <button type="submit">Rechercher</button>
            </div>

            <select value={unit} onChange={handleUnitChange}>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </form>
        </div>
      </nav>

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        weatherData && <WeatherDisplay data={weatherData} unit={unit} />
      )}
    </>
  );
};

export default SearchForm;
