import React, { useState, useEffect } from "react";
import axios from "axios";

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
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </form>

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        weatherData && (
          <div>
            <h2>Météo de {weatherData.name}</h2>
            <p>
              Température: {weatherData.main.temp}°
              {unit === "metric" ? "C" : "F"}
            </p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        )
      )}
    </>
  );
};

export default SearchForm;
