import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const hanldeNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const hanldeDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const hanldeAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={hanldeNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" value={dueDate} onChange={hanldeDateChange} />
        </div>
        <div class="col-2 kg-Add-button">
          <button
            type="button "
            class="btn btn-success kg-button"
            onClick={hanldeAddButtonClicked}
          >
            <BiMessageAltAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
