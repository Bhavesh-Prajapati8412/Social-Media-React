import AddTodo from "./componenets/AddTodo";
import AppName from "./componenets/AppName";
import TodoItem1 from "./componenets/TodoItem1";
import TodoItem2 from "./componenets/TodoItem2";
import "./App.css";
import CurrentTime from "./componenets/CurrentTime";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <p class="fw-bolder">
        <div class="mb-4">
          <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
            <CurrentTime></CurrentTime>
          </div>
        </div>
      </p>

      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
