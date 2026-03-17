import { useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";
import styles from "../styles/Weather.module.css";

export default function Weather() {
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
    <div>
      <h2 className={styles.heading}>Weather</h2>
      <p className={styles.sub}>Search a city to get the current weather.</p>

      <div className={styles.searchRow}>
        <input
          className={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter city name..."
        />
        <button className={styles.btn} onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className={styles.loading}>Fetching weather for <strong>{city}</strong>...</p>}
      {error   && <div className={styles.error}>{error}</div>}

      {weather && (
        <div className={styles.card}>
          <p className={styles.cityName}>{weather.city}, {weather.country}</p>
          <p className={styles.temp}>{weather.temp}°C</p>
          <p className={styles.desc}>{weather.description}</p>
          <div className={styles.statsGrid}>
            <div className={styles.stat}><div className={styles.sl}>Humidity</div><div className={styles.sv}>{weather.humidity}%</div></div>
            <div className={styles.stat}><div className={styles.sl}>Wind</div><div className={styles.sv}>{weather.wind} m/s</div></div>
            <div className={styles.stat}><div className={styles.sl}>Feels like</div><div className={styles.sv}>{weather.feelsLike}°C</div></div>
          </div>
        </div>
      )}
    </div>
  );
}