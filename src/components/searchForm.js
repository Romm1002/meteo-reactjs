import React, { useState, useEffect } from "react";

import axios from "axios";

const SearchForm = () => {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=daec8b2f6abe31f4fc66091a92a6edda`
        );

        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (city !== "") {
      fetchData();
    }
  }, [city]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter a city"
      />
      {weatherData && (
        <div>
          <h2>Weather Information for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
