import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ApiProvider } from "../context/APIContext";
import APIContext from "../context/APIContext";
function Weather() {
  const API_KEY = useContext(APIContext);
  const [cityName, setCityName] = useState("istanbul");
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=7&key=${API_KEY}`
    )
      .then((res) => setForecast(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [cityName]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      {forecast && (
        <h2>
          {forecast.city_name} - {forecast.country_code}{" "}
        </h2>
      )}
      {forecast &&
        forecast.data.map((item, index) => (
          <div key={index} className="forecast-card">
            {item.datetime}
            <br />
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt={item.weather.description}
            />
            <br />
            <span style={{ color: "red" }}>{Math.round(item.max_temp)}°</span>-
            <span style={{ color: "blue" }}>{Math.round(item.min_temp)}°</span>
          </div>
        ))}
    </div>
  );
}

export default Weather;
