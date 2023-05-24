const WeatherDisplay = () => {
  const data = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
      { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
    ],
    base: "stations",
    main: {
      temp: 293.16,
      feels_like: 292.6,
      temp_min: 291.64,
      temp_max: 294.84,
      pressure: 1024,
      humidity: 53,
    },
    visibility: 10000,
    wind: { speed: 3.6, deg: 340 },
    clouds: { all: 40 },
    dt: 1684934125,
    sys: {
      type: 2,
      id: 268730,
      country: "GB",
      sunrise: 1684900642,
      sunset: 1684958253,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
  };
  const Months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(data.dt);

  return (
    <div>
      <h1>{data.name}, {data.sys.country}</h1>
      <h2>{d.getDate() + ' ' + Months[d.getMonth()] + ', ' + d.getHours() + ':' + d.getMinutes()}</h2>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main}/>
      <b>{data.main.temp}</b>
      <p>Température ressentie: {data.main.feels_like}, {data.weather.map((data) => data.description)}</p>
      <div>
        <p>Vent: {data.wind.speed}m/s</p>
        <p>Pression: {data.main.pressure}hPa</p>
        <p>Humidité: {data.main.humidity}%</p>
        <p>Visibilité: {data.visibility / 1000}km</p>
        <p>Température la plus basse: {data.main.temp_min}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
