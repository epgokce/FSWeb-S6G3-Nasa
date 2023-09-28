import React from "react";

function ImageGallery(props) {
  // Veriler alınırken bir yükleme mesajı görüntüle
  if (!props.viewData) return <h3>Yükleniyor...</h3>;

  // Veriler alındıktan sonra bileşeninizi normal şekilde görüntüleyin
  return (
    <>
      <div className="gallery">
        {props.viewData.map((item, i) => (
          <div
            onClick={() => props.clickProp(i)}
            key={i}
            className={`gallery-item ${
              props.selectedAPOD === item ? "active" : ""
            }`}
          >
            <img src={item.url} alt={item.explanation} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageGallery;
