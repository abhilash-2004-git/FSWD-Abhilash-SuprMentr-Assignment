import { useState } from "react";
import styles from "../styles/Mood.module.css";

const MOODS = [
  { name: "Joyful",  emoji: "😄", message: "You're radiating sunshine today!" },
  { name: "Calm",    emoji: "😌", message: "A peaceful state of clarity."      },
  { name: "Excited", emoji: "🤩", message: "Channel that energy into something bold!" },
  { name: "Sad",     emoji: "😢", message: "It's okay to feel heavy sometimes."       },
  { name: "Anxious", emoji: "😰", message: "Try box breathing — you've got this."     },
  { name: "Angry",   emoji: "😤", message: "Strong feelings are valid. Take a pause." },
];

export default function Mood() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2 className={styles.heading}>Mood tracker</h2>
      <p className={styles.sub}>How are you feeling right now?</p>

      <div className={styles.grid}>
        {MOODS.map((mood) => (
          <button
            key={mood.name}
            className={`${styles.btn} ${selected?.name === mood.name ? styles.selected : ""}`}
            onClick={() => setSelected(mood)}
          >
            <span className={styles.emoji}>{mood.emoji}</span>
            <span className={styles.label}>{mood.name}</span>
          </button>
        ))}
      </div>

      <div className={styles.result}>
        {selected
          ? <p>{selected.emoji} <strong>{selected.name}</strong> — {selected.message}</p>
          : <p>Select a mood above...</p>
        }
      </div>
    </div>
  );
}