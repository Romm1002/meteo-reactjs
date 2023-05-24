const WeatherDisplay = ({ data, unit }) => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aôut",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  //   datetime
  var d = new Date(0);
  d.setUTCSeconds(data.dt);
  //   sunrise time
  var sr = new Date(0);
  sr.setUTCSeconds(data.sys.sunrise);
  //   sunset time
  var ss = new Date(0);
  ss.setUTCSeconds(data.sys.sunset);

  var daytimePercent = ((d.getTime() - sr.getTime()) * 100) / (ss.getTime() - sr.getTime());

  return (
    <div className="weatherDisplay container">
      <div className="row">
        <div className="col-6">
          <h1>
            {data.name}, {data.sys.country}
          </h1>
          <h2>
            {d.getDate() +
              " " +
              months[d.getMonth()] +
              ", " +
              d.getHours() +
              "h" +
              (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes())}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].main}
          />
          <b>
            {data.main.temp}
            {unit == "metric" ? "°C" : "°F"}
          </b>
          <p>
            Température ressentie: {data.main.feels_like}
            {unit == "metric" ? "°C" : "°F"},{" "}
            {data.weather.map((data) => data.description)}
          </p>
        </div>
        <div className="col-6 card p-3 bg-light">
          <div className="row">
            <p className="col-6">
              Vent: {data.wind.speed}
              {unit == "metric" ? "m/s" : "mph"}
            </p>
            <p className="col-6">Pression: {data.main.pressure}hPa</p>
            <p className="col-6">Humidité: {data.main.humidity}%</p>
            <p className="col-6">Visibilité: {data.visibility / 1000}km</p>
            <p className="col-6">
              Température la plus basse: {data.main.temp_min}
              {unit == "metric" ? "°C" : "°F"}
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-1 text-center">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="soleil"/>
            <p>
            {sr.getHours() +
                "h" +
                (sr.getMinutes() < 10 ? "0" + sr.getMinutes() : sr.getMinutes())}
            </p>
        </div>
        <div className="col-10">
                <input type="range" className="w-100" disabled value={daytimePercent}/>
        </div>
        <div className="col-1 text-center">
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt="lune"/>
            <p>
            {ss.getHours() +
                "h" +
                (ss.getMinutes() < 10 ? "0" + ss.getMinutes() : ss.getMinutes())}
            </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
