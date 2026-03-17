import { useState } from "react";
import styles from "../styles/Tasks.module.css";

export default function Tasks() {
  const [tasks,  setTasks]  = useState([
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Read a book",   done: true  },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), done: false }, ...tasks]);
    setInput("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleTask = (id) => setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  const total = tasks.length;
  const done  = tasks.filter((t) => t.done).length;

  return (
    <div>
      <h2 className={styles.heading}>Task list</h2>
      <p className={styles.sub}>Add, complete, and delete your tasks.</p>

      <div className={styles.stats}>
        {[["Total", total], ["Done", done], ["Left", total - done]].map(([l, v]) => (
          <div key={l} className={styles.stat}>
            <div className={styles.statLabel}>{l}</div>
            <div className={styles.statValue}>{v}</div>
          </div>
        ))}
      </div>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task..."
        />
        <button className={styles.addBtn} onClick={addTask}>+ Add</button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className={`${styles.taskItem} ${task.done ? styles.done : ""}`}>
          <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
          <span className={styles.taskText}>{task.text}</span>
          <button className={styles.delBtn} onClick={() => deleteTask(task.id)}>✕</button>
        </div>
      ))}
    </div>
  );
}