const FILTERS = ["all", "active", "done"];

export default function TaskFilter({ filter, setFilter }) {
  return (
    <div style={styles.row}>
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{ ...styles.btn, ...(filter === f ? styles.active : {}) }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

const styles = {
  row:    { display: "flex", gap: 6, marginBottom: "1rem" },
  btn:    { fontSize: 12, padding: "4px 12px", border: "1px solid #ccc", borderRadius: 999, background: "transparent", cursor: "pointer", color: "#555" },
  active: { background: "#111", color: "#fff", borderColor: "#111" },
};