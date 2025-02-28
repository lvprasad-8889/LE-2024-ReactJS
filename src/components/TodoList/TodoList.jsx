// rules
import { useState } from "react";

// 1. name should be in upper camel case
// 2. it must be exported
// 3. it must return html element.

function TodoList() {
  let [tasks, setTasks] = useState([]);
  let [taskName, setTaskName] = useState("");

  const changeTaskName = (event) => {
    console.log("I am task name....", event.target.value);
    setTaskName(event.target.value);
  };

  const addTask = () => {
    console.log("I am add task function");
    if (taskName.length > 0) {
      setTasks([...tasks, taskName]);
      setTaskName("");
    } else {
      alert("Please enter task name");
    }
  };

  //   two way data binding, class to view and view classs
  return (
    <div className="todo-list">
      <div className="d-flex">
        <form action="">
          <input
            type="text"
            className="form-control d-block w-75"
            value={taskName}
            onChange={changeTaskName}
            required
          />
          <button type="submit" className="btn btn-success" onClick={addTask}>
            Add a task
          </button>
        </form>
      </div>
      <ul>
        {tasks.length > 0 &&
          tasks.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
