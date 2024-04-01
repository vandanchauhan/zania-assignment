import { useState } from "react";

const Card = ({ imageUrl, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    return (
      <div
        style={{ margin: "5px", padding: "10px", width: "30%", flexShrink: 0 }}
      >
        <div>
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
      </div>
    );
  };

  export default Card;