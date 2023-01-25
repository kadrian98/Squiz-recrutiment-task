import React, { useState, useEffect } from "react";
import "./App.scss";
import DataItems from "./components/DataItems";
import SearchData from "./components/SearchData";
import SortData from "./components/SortData";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataUrl = "https://dujour.squiz.cloud/developer-challenge/data";

  useEffect(() => {
    fetch(dataUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then(actualData => {
        setData(actualData);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "error!";

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-h1">Welcome on my React app!</h1>
      </header>
      <SortData data={data} />
      <SearchData />
      <DataItems data={data} />
    </div>
  );
}

export default App;
