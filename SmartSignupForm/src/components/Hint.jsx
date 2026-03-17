import styles from "../SignupForm.module.css";

export default function Hint({ status, message }) {
  if (!message) return <div className={styles.hint} />;
  return <div className={`${styles.hint} ${styles[status] || ""}`}>{message}</div>;
}