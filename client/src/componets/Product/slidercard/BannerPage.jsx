import React from "react";
import "../slidercard/Banner.css"

const BannerPage = () => {
  return (
    <div className="offerheader">
      <div className="offer">
                <h2 className="title2">MUTHU'S PETAlS</h2>
                <br />
        <h1 className="offerh1">
          LIMITED TIME OFFER Shop Now & Nourish Your Hair & Skin Naturally!
        </h1>

      <br />
        
        <div className="view">
           <button className="viewmore">
        {" "}
        <a href="/products" >VIEW MORE</a>
      </button>
        </div>

      </div>
      
    </div>
  );
};

export default BannerPage;
