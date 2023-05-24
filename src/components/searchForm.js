import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "../components/weatherDisplay";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "daec8b2f6abe31f4fc66091a92a6edda";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}&lang=fr`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Une erreur est survenue :", error);
        setError(
          "Une erreur est survenue lors de la récupération des données météorologiques."
        );
        setWeatherData(null); // Clear weather data in case of error
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <select value={unit} onChange={handleUnitChange}>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        weatherData && <WeatherDisplay data={weatherData} unit={unit}/>
      )}
    </div>
  );
};

export default SearchForm;
