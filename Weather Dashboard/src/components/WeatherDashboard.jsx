import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { fetchWeatherData } from "../api/weatherApi";
import styles from "../styles/WeatherDashboard.module.css";

export default function WeatherDashboard() {
  const [city,    setCity]    = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const data = await fetchWeatherData(city.trim());
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.heading}>Weather Dashboard</h2>

      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <LoadingState city={city} />}
      {error   && <ErrorState message={error} />}

      {weather && (
        <>
          <WeatherCard  weather={weather} />
          <ForecastCard forecast={weather.forecast} />
        </>
      )}

      {!loading && !error && !weather && (
        <p className={styles.hint}>Enter a city name above to get started.</p>
      )}
    </div>
  );
}