import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <h2>Welcome to your Dashboard</h2>
          <p>Manage your tasks efficiently:</p>

          <TaskForm onAdd={addTask} />
          <TaskList
            tasks={tasks}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}
