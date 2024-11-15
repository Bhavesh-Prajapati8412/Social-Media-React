import "./App.css";
function App() {
  let foodItems = [];
  // let foodItems = [  "Fruits",
  //   "Dal",
  //   "Roti",
  //   "Green Veges",
  //   "Dry Fruits",
  //   "Ghee",
  // ];
  return (
    <>
      <div>Healthy Food</div>
      {foodItems.length === 0 && <h7>I am still Hungry.</h7>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
