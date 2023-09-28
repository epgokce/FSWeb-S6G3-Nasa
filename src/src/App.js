import React, { useState, useEffect } from "react";
import "./App.css";
import ImageViewer from "./components/ImageViewer";
import DatePicker from "./components/DatePicker";
import ImageGallery from "./components/ImageGallery";
import axios from "axios";

const API_KEY = "09XwLlHXTsUY95YCg104KBqIkGaj0tfkgLLfxbUP";

function App() {
  const [render, setRender] = useState(0); // [state, setState
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("2020-07-22");

  const [selectedAPOD, setSelectedAPOD] = useState(null); // [state, setState

  const [error, setError] = useState(null);

  useEffect(() => {
    setRender(render + 1);
    setData(null);
    // Make a request for a user with a given ID
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=3`
        // `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
        setSelectedAPOD(response.data[1]);
        setError(null);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error.response.data.msg);
      })
      .finally(function () {
        // always executed
      });
  }, [selectedDate]);

  const galleryClickHandler = (ind) => {
    setSelectedAPOD(data[ind]);
  };

  if (!selectedAPOD) return <h3>Yükleniyor...</h3>;

  const containerBg = selectedAPOD
    ? { backgroundImage: `url(${selectedAPOD.hdurl})` }
    : {};

  return (
    <div className="App flex-center" style={containerBg}>
      <div className="container">
        <div className="column flex-center">
          <div className="hamburger-menu"></div>
        </div>
        <div className="column">
          <div className="row">
            {selectedAPOD.title} - {selectedAPOD.date}
          </div>
          <div className="row grow flex-center">bişi</div>
          <div className="row">Copyrigt</div>
        </div>
        <div className="column grow">
          <div className="row">boş başlık</div>
          <div className="row grow  fancy-title-container">
            <div className="fancy-title">{selectedAPOD.title}</div>
          </div>
          <div className="row">nex prew</div>
        </div>
        <div className="column">
          <ImageGallery
            clickProp={galleryClickHandler}
            viewData={data}
            selectedAPOD={selectedAPOD}
          />
        </div>
        <div className="column">
          <div className="row">archive</div>
          <div className="row grow social">
            <span>facebook</span>
            <span>twitter</span>
            <span>instagram</span>
          </div>
        </div>
      </div>

      {/* <DatePicker val={selectedDate} dateChange={setSelectedDate} />

      {error && <h3>Error: {error}</h3>}
      {!error && <ImageGallery viewData={data} />} */}
    </div>
  );
}

export default App;
