import React, { useState } from "react";
import useTranslation from "hooks/useTranslate/useTranslation";

import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";
import "./styles.scss";

const arrayImages = [
  "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_2.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
  "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_1.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
  "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_3.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
  "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_4.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
  "https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/sliders%2Fslider_5.jpg?alt=media&token=38493c57-002e-4efa-b8f3-95508eb10c30",
];

function GridPicture() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="wrapper-service">
      <h2 className="wrapper-service__title">{t("Travel images")}</h2>

      <div className="grid-container">
        {arrayImages.map((url, idx) => {
          return (
            <div
              className={`grid-item-${idx + 1}`}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(idx);
              }}
            >
              <img src={url} alt={url} />
            </div>
          );
        })}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={arrayImages[photoIndex]}
          nextSrc={arrayImages[(photoIndex + 1) % arrayImages.length]}
          prevSrc={
            arrayImages[
              (photoIndex + arrayImages.length - 1) % arrayImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + arrayImages.length - 1) % arrayImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % arrayImages.length)
          }
        />
      )}
    </div>
  );
}

export default GridPicture;
