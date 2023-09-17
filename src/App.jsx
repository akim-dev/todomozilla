/* eslint-disable react/prop-types */
import { useState } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid";

// import "./App.css";

// handling form submission via callback

function App({ task }) {
  const [tasks, setTasks] = useState(task);

  function addTask(name) {
    // const newTask = { id: "id", name, completed: false };
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      key={task.id}
      completed={task.completed}
    />
  ));

  return (
    <>
      <div className="todoapp stack-large">
        <h1>Todo</h1>
        <Form addTask={addTask} />
        {/* <form action="">
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What need to be done
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form> */}
        <div className="filters btn-group stack-exception">
          {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button> */}
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {/* <Todo name="Buy milk" compoleted={true} id="todo-0" />
          <Todo name="Clean room" compoleted={false} id="todo-1" />
          <Todo name="Walk dog" compoleted={false} id="todo-2" /> */}
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
