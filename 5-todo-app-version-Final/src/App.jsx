import AddTodo from "./componenets/AddTodo";
import AppName from "./componenets/AppName";
import "./App.css";
import CurrentTime from "./componenets/CurrentTime";
import TodoItems from "./componenets/TodoItems";
import WelcomeMessage from "./componenets/WelcomeMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added :  ${itemName} Date:${itemDueDate} `);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <p class="fw-bolder">
        <div class="mb-4">
          <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
            <CurrentTime />
          </div>
        </div>
      </p>

      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
