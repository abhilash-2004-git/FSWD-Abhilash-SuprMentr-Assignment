import styles from "../styles/ForecastCard.module.css";

export default function ForecastCard({ forecast }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>5-day forecast</p>
      <div className={styles.grid}>
        {forecast.map((day) => (
          <div key={day.day} className={styles.dayCard}>
            <div className={styles.day}>{day.day}</div>
            <div className={styles.icon}>{day.icon}</div>
            <div className={styles.temp}>{day.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}