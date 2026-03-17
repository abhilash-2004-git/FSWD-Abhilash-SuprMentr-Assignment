import styles from "../SignupForm.module.css";

export default function FieldIcon({ status }) {
  if (status === "success")
    return <span className={styles.fieldIcon} style={{ color: "var(--success)" }}>✓</span>;
  if (status === "error")
    return <span className={styles.fieldIcon} style={{ color: "var(--error)" }}>✕</span>;
  return null;
}