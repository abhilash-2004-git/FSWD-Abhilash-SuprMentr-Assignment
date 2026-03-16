export default function TaskInput({ input, setInput, onAdd }) {
  return (
    <div style={styles.row}>
      <input
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="Add a new task..."
        maxLength={80}
      />
      <button style={styles.btn} onClick={onAdd}>+ Add</button>
    </div>
  );
}

const styles = {
  row:   { display: "flex", gap: 8, marginBottom: "1.5rem" },
  input: { flex: 1, height: 38, padding: "0 12px", fontSize: 14, border: "1px solid #ccc", borderRadius: 8, outline: "none" },
  btn:   { height: 38, padding: "0 16px", fontSize: 14, border: "1px solid #ccc", borderRadius: 8, background: "#fff", cursor: "pointer" },
};