import { useEffect, useState } from "react";
import "./TodoList.css";

const Todo = () => {

  const [task, setTask] = useState("");
  const todoKey = "Checktodo";

  const [tasks, setTasks] = useState(() => {

    const rowtool = localStorage.getItem(todoKey);
if(!rowtool) return [];

return JSON.parse(rowtool);
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, task, checked: false }]);
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const DoneTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(tasks));
  }, [tasks]);

  const showTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  const showDate = `${currentTime.getUTCDate()}:${
    currentTime.getUTCMonth() + 1
  }:${currentTime.getFullYear()}`;

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <div className="timedate">
        <h1>To-Do List</h1>
        <h3>{`${showDate} - ${showTime}`}</h3>
      </div>
      <div className="taskadd">
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleTaskChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.map((taskItem) => (
        <div key={taskItem.id}>
          <h2 className={taskItem.checked ? "trues" : "false"}>
            {taskItem.task}
          </h2>
          <button onClick={() => deleteTask(taskItem.id)}>Delete</button>
          <button onClick={() => DoneTask(taskItem.id)}>
            {taskItem.checked ? "Undo" : "Done"}
          </button>
        </div>
      ))}
      <button onClick={deleteAllTasks}>Delete all</button>
    </div>
  );
};

export default Todo;
