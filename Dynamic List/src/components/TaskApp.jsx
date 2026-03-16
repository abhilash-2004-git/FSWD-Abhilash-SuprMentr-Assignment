import { useState } from "react";
import { initialTasks } from "../data/tasksData";
import TaskFilter from "./TaskFilter";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

export default function TaskApp() {
  const [tasks,  setTasks]  = useState(initialTasks);
  const [input,  setInput]  = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), done: false }, ...tasks]);
    setInput("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const filtered = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done
  );

  return (
    <div style={styles.wrap}>
      <h2 style={styles.heading}>Task List</h2>
      <TaskInput input={input} setInput={setInput} onAdd={addTask} />
      <TaskStats tasks={tasks} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filtered} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

const styles = {
  wrap:    { maxWidth: 480, margin: "0 auto", padding: "32px 16px", fontFamily: "sans-serif" },
  heading: { fontSize: "1.4rem", fontWeight: 600, marginBottom: "1.5rem" },
};