import { useState } from "react";

const Card = ({
  id,
  imageUrl,
  title,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, id)}
      style={{ margin: "5px", padding: "10px", width: "30%", flexShrink: 0 }}
    >
      <div onClick={openOverlay}>
        <div style={{ marginBottom: "10px" }}>{title}</div>
        {!imageLoaded && (
          <div
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </div>
        )}
        <img
          src={imageUrl}
          alt="Sample"
          style={{ width: "100%" }}
          onLoad={handleImageLoad}
        />
      </div>
      {showOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "80%",
              maxHeight: "80%",
              background: "#fff",
            }}
          >
            <button
              onClick={closeOverlay}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "5px 10px",
                background: "rgba(0, 0, 0, 0.3)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <img src={imageUrl} alt="Sample" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
