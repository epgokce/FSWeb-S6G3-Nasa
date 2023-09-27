import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "./App.css";
import axios from "axios";
import Gorsel from "./component/Gorsel";

function App() {
    const [nasa, setNasa] = useState({});
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "c2859f48-935a-4fcf-a268-fa9f5291079c",
          date: date,
        },
      })
      .then(function (response) {
        setNasa(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [date]);

  const dateSetter = (evt) => {
    setDate(evt.target.value);
  };

  return (
    <div className="App">
      <input type="date" id="date" name="date" onChange={dateSetter} />
      <span role="img" aria-label="go!">
        {!nasa.title && <p>Yükleniyor...</p>}
      </span>
      {nasa.title && <Gorsel data={nasa} />}
    </div>
  );
}

export default App;
