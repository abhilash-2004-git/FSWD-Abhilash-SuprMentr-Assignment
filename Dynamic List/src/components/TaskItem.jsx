export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div style={{ ...styles.item, opacity: task.done ? 0.55 : 1 }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        style={{ width: 16, height: 16, cursor: "pointer" }}
      />
      <span style={{ ...styles.text, textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button style={styles.del} onClick={() => onDelete(task.id)}>✕</button>
    </div>
  );
}

const styles = {
  item: { display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12, padding: "12px 14px" },
  text: { flex: 1, fontSize: 14 },
  del:  { width: 28, height: 28, border: "none", background: "none", color: "#aaa", fontSize: 14, cursor: "pointer", borderRadius: 6 },
};