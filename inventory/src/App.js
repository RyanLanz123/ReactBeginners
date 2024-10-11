import "./App.css";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Ryan" number={2}/>
      <AddItem text ="Joe" />
      <AddItem />
    </div>
  );
}


function AddItem(props) {
  const value = props.text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form" />
    </form>
  );
}

export default App;
