function TodoItem2() {
  let todoName = "College";
  let todoDate = "4/10/24";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2 ">
          <button type="button" class="btn btn-danger kg-button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;