import styles from "../styles/States.module.css";

export default function ErrorState({ message }) {
  return (
    <div className={styles.errorBox}>
      <p className={styles.errorText}>{message}</p>
    </div>
  );
}