import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData (searchParams);
  }

  return (
    <div className="App">
      <SearchBar callback= {updateData} />
      <p>Name: {"name" in data ? data["name"] : "No Data To Display"}</p>
      <p>Price: {"price" in data ? data["price"] : "No Data To Display"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Data To Display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Data To Display"}</p>
    </div>
  );
}


export default App;
