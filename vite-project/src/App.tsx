import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = axios("http://localhost:3000/transactions");
        setData(response.data.transactions);
      } catch (e) {
        console.error("Error: ", e);
        throw new Error(e);
      }
    };

    fetchTransactions();
  }, []);
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
