import styles from "../styles/States.module.css";

export default function LoadingState({ city }) {
  return (
    <div className={styles.box}>
      <div className={styles.spinner} />
      <p className={styles.text}>Fetching weather for <strong>{city}</strong>...</p>
    </div>
  );
}