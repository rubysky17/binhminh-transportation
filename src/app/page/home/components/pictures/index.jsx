import React from "react";

import "./styles.scss";

function GridPicture() {
  const arrayImages = [
    "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_2.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
    "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_1.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
    "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_3.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
    "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_4.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
    "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_5.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
  ];

  return (
    <div className="wrapper-service">
      <h2 className="wrapper-service__title">Hình ảnh</h2>

      <div className="grid-container">
        {arrayImages.map((url, idx) => {
          return (
            <div className={`grid-item-${idx + 1}`}>
              <img src={url} alt={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GridPicture;
