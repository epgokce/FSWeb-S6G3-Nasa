import React from "react";

function Gorsel(props) {
  const { data: nasa } = props;
  return (
    <div>
      <h2>{nasa.title}</h2>
      <p> {nasa.date}</p>
      <img src={nasa.url} />
      <p>{nasa.copyright}</p>
      <p>{nasa.explanation}</p>
    </div>
  );
}

export default Gorsel;
