import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  
  function addTask(name) {
    alert(name);
  }

  const taskList = props.tasks.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
      />
    )
  );

  return (
    <div className="todoapp stack-large">

      <h1>TodoMatic</h1>
      <Form addTaskInList={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton name="All" />
        <FilterButton name="fdd" />
        <FilterButton name="ffb" />
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>

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

