import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    console.log("🚀 ~ handleSubmit ~ e:", e);
    e.preventDefault();
    setData([e.target[0].value, e.target[1].value]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" />

        <button type="submit">Save</button>
      </form>

      {data}
    </>
  );
}

export default App;
