import { useState } from "react";

const moods = [
  { name: "Happy",  emoji: "😄" },
  { name: "Calm",   emoji: "😌" },
  { name: "Sad",    emoji: "😢" },
  { name: "Angry",  emoji: "😤" },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "sans-serif" }}>
      <h2>How are you feeling?</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px", margin: "20px 0" }}>
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelected(mood)}
            style={{
              padding: "12px 20px",
              fontSize: "1.5rem",
              borderRadius: "12px",
              border: selected?.name === mood.name ? "2px solid blue" : "2px solid #ccc",
              background: selected?.name === mood.name ? "#e0e7ff" : "#fff",
              cursor: "pointer",
            }}
          >
            {mood.emoji}
            <div style={{ fontSize: "0.75rem" }}>{mood.name}</div>
          </button>
        ))}
      </div>

      {selected && (
        <p style={{ fontSize: "1.1rem", marginTop: "16px" }}>
          You selected: <strong>{selected.emoji} {selected.name}</strong>
        </p>
      )}
    </div>
  );
}