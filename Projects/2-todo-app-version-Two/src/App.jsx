import AddTodo from "./componenets/AddTodo";
import AppName from "./componenets/AppName";
import "./App.css";
import CurrentTime from "./componenets/CurrentTime";
import TodoItems from "./componenets/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to Gym",
      dueDate: "Evening",
    },
  ];
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
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
