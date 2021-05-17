import React, { useState } from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {

  // passing props.tasks into the useState() hook
  const [tasks, setTasks] = useState(props.tasks);
  
  // adding new task
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // checkbox toggle
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // all tasks
  const taskList = tasks.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
        checkTaskCompleted={toggleTaskCompleted}
      />
    )
  );

  // change heading count
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">

      <h1>TodoMatic</h1>
      <Form addTaskInList={addTask} />
      {/* addTask passed as a prop to form */}

      <div className="filters btn-group stack-exception">
        <FilterButton name="All" />
        <FilterButton name="fdd" />
        <FilterButton name="ffb" />
      </div>

      <h2 id="list-heading">{headingText}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>

      {/* link-tutorial 
      <p>https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components</p> */}

    </div>
    
  );
}

export default App;

