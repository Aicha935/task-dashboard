import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", width: "70%", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px" }}>Add Task</button>
    </form>
  );
}
