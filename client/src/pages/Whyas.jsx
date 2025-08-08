import React from "react";
import "./whyas.css"
import img1 from "../componets/images/loyalty.gif"
import img2 from "../componets/images/syringe.gif"
import img3 from "../componets/images/home-care.gif"
import img4 from "../componets/images/natural-product.gif"
const Whyas = () => {

    
  return (
    <div className="whyas">
      <div className="whyas1">
        <h1 className="whyas2">
        <span id="whyas"> Why Us? </span>Where purity meets performance for hair and skin that thrive. Our premium products guarantee radiant locks and the benefits of pure, wholesome care.
        </h1>
       

        <div className="whyas2">
              <img src={img1} alt=""  className="img1"/>
           <h1 className="whyas3" id="a">Satisfied Customers</h1>
            <h1 className="whyas3">Proven outcomes across all age</h1>       
        </div>
        
        <div className="whyas2">
              <img src={img2} alt=""  className="img1"/>
           <h1 className="whyas3" id="a">No Side Effects</h1>
            <h1 className="whyas3">Hair elegance with 0% side effects</h1>       
        </div>

        <div className="whyas2">
              <img src={img3} alt=""  className="img1"/>
           <h1 className="whyas3" id="a">Natural Care</h1>
            <h1 className="whyas3">Herbal solution for your hair</h1>       
        </div>

        <div className="whyas2">
              <img src={img4} alt=""  className="img1"/>
           <h1 className="whyas3" id="a">100% Organic</h1>
            <h1 className="whyas3">Authentic natural ingredients</h1>       
        </div>

      </div>
      
    </div>
  );
};

export default Whyas;
