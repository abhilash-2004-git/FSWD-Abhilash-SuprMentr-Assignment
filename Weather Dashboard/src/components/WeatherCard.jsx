import styles from "../styles/WeatherCard.module.css";

export default function WeatherCard({ weather }) {
  const { city, country, temp, feelsLike, description, humidity, wind, visibility } = weather;

  return (
    <div className={styles.card}>
      <div className={styles.cityName}>{city}</div>
      <div className={styles.country}>{country}</div>

      <div className={styles.tempRow}>
        <span className={styles.temp}>{temp}</span>
        <span className={styles.unit}>°C</span>
      </div>

      <p className={styles.desc}>{description}</p>
      <p className={styles.feels}>Feels like {feelsLike}°C</p>

      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Humidity</div>
          <div className={styles.statValue}>{humidity}%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Wind</div>
          <div className={styles.statValue}>{wind} m/s</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Visibility</div>
          <div className={styles.statValue}>{Math.round(visibility / 1000)} km</div>
        </div>
      </div>
    </div>
  );
}