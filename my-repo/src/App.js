import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState({ sport: "", id: "" });
  const [sportsList, setSportsList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    const newSport = {
      sport: value.sport,
      id: Date.now(),
    };
    e.preventDefault();
    setSportsList([...sportsList, newSport]);
    setValue({ sport: "" });
  };

  return (
    <div className="App">
      <h1>Favorite Sports</h1>
      {sportsList.map((sport) => {
        return <li key={sport.id}>{sport.sport}</li>;
      })}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="sport"
            value={value.sport}
            placeholder="Enter Favorite Sport"
            onChange={handleChange}
          />
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
