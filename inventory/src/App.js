import './App.css';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
    </div>
  );
}

function Info(){
  return (
    <div>
      <h1>Inventory System</h1>
      <p>Mange your stuff</p>
      </div>
  )
}

function AddItem(){
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type ="text" id="text-form" />
    </form>
  )
}

export default App;
