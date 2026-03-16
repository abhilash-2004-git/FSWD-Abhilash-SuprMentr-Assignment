export default function TaskStats({ tasks }) {
  const total     = tasks.length;
  const done      = tasks.filter((t) => t.done).length;
  const remaining = total - done;

  return (
    <div style={styles.stats}>
      {[["Total", total], ["Done", done], ["Remaining", remaining]].map(([label, val]) => (
        <div key={label} style={styles.stat}>
          <div style={styles.label}>{label}</div>
          <div style={styles.value}>{val}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  stats: { display: "flex", gap: 12, marginBottom: "1.5rem" },
  stat:  { flex: 1, background: "#f5f5f5", borderRadius: 8, padding: "12px 16px" },
  label: { fontSize: 12, color: "#888", marginBottom: 4 },
  value: { fontSize: 22, fontWeight: 600 },
};