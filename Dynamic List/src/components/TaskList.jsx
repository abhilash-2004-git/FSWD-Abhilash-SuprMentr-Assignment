import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p style={styles.empty}>No tasks here. Add one above!</p>;
  }

  return (
    <div style={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

const styles = {
  list:  { display: "flex", flexDirection: "column", gap: 8 },
  empty: { fontSize: 14, color: "#aaa", textAlign: "center", padding: "2rem 0" },
};