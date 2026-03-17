import styles from "../SignupForm.module.css";

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = ["", "var(--error)", "var(--warn)", "var(--accent)", "var(--success)"];

const RULES_CONFIG = [
  { key: "len",     label: "8+ characters" },
  { key: "upper",   label: "Uppercase letter" },
  { key: "num",     label: "Number" },
  { key: "special", label: "Special character" },
];

export default function StrengthMeter({ score, rules }) {
  return (
    <div className={styles.strengthWrap}>
      <div className={styles.strengthLabel}>
        <span>Strength</span>
        <span style={{ color: STRENGTH_COLORS[score], transition: "color 0.3s" }}>
          {STRENGTH_LABELS[score] || "—"}
        </span>
      </div>
      <div className={styles.bars}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`${styles.bar}${i < score ? ` ${styles[`s${score}`]}` : ""}`}
          />
        ))}
      </div>
      <div className={styles.rules}>
        {RULES_CONFIG.map(({ key, label }) => (
          <div key={key} className={`${styles.rule}${rules[key] ? ` ${styles.met}` : ""}`}>
            {rules[key] ? "●" : "○"} {label}
          </div>
        ))}
      </div>
    </div>
  );
}