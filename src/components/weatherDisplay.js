const WeatherDisplay = ({data, unit}) => {
    
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    const tempUnit = {"metric": "°C", "imperial": "°F"}
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(data.dt);
    console.log(unit)

    return (
      <div>
        <h1>{data.name}, {data.sys.country}</h1>
        <h2>{d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getHours() + 'h' + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes())}</h2>
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
