import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {}, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="serach-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
