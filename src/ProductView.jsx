import React, { useEffect } from "react";

const ProductView = () => {
  useEffect(() => {
    // Dynamically load the Sirv script to enable the 360-degree viewer
    const script = document.createElement("script");
    script.src = "https://scripts.sirv.com/sirvjs/v3/sirv.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      //! Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    // To display me image at the center 
    <div style={{ display: "flex", justifyContent: "center" }}> 
      <div
      style={{ width: "300px", height: "300px" }}
        className="Sirv"
        data-src="https://ajeet8395.sirv.com/Spins/Trainers/Trainers.spin"
        // Link of 3d image
      ></div>
    </div>
  );
};

export default ProductView;
