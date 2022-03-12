import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Background from "../components/UI/Background";

function ShowWeather(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});

  //get input location
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get("location");

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setIsLoading(true);

    const url =
      "http://api.weatherapi.com/v1/current.json?key=" +
      API_KEY +
      "&q=" +
      location +
      "&aqi=no";

    fetch(url, {
      method: "GET",
      headers: {
        credentials: "include",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      });
  }, [location]);

  if (isLoading) {
    return (
      <section>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Loading...</p>
      </section>
    );
  }
  console.log(weatherData);
  return (
    <div>
      <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{location}</h2>
      <Background>
        <div>
          <h1>{weatherData.current.temp_c} °C</h1>
          <h2>{weatherData.current.temp_f} °F</h2>
        </div>
        <div>
          <span>
            <br />
            <img src={weatherData.current.condition.icon} />
          </span>
          <h3>{weatherData.current.condition.text}</h3>
        </div>
      </Background>
    </div>
  );
}

export default ShowWeather;
