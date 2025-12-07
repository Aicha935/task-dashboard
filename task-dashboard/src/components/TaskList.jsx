import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onComplete={() => onComplete(index)}
            onDelete={() => onDelete(index)}
          />
        ))
      )}
    </div>
  );
}
