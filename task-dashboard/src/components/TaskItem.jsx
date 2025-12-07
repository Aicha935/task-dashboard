export default function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <div>
        <button onClick={onComplete} style={{ marginRight: "5px" }}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={onDelete} style={{ color: "red" }}>Delete</button>
      </div>
    </div>
  );
}
