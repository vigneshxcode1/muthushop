import React, { useEffect, useState } from "react";
import '../CardSlider.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loadingimg from "../../../componets/images/7GtC.gif"
import './zculture.css'
const BASE_URL = "https://muthushop.onrender.com";

// const BASE_URL= "http://localhost:8000"

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {

      setLoading(true);
      setError(null);

      try {

        // const cachedData = localStorage.getItem(`zculture`);
        // if (cachedData) {
        //   setProducts(JSON.parse(cachedData));
        //   setLoading(false);
        //   return;
        // }
        const res = await axios.get(`${BASE_URL}/api/v1/products`);

        const sortedProducts = res.data.product.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const firstEightProducts = sortedProducts.slice(0, 15);

        localStorage.setItem('zculture', JSON.stringify(firstEightProducts));

        setProducts(firstEightProducts);

      } catch (err) {
        console.error("Error fetching products:", err);
        setError("check your internet. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        {/* <img className="loading-image" src={loadingimg} alt="Loading..." /> */}
        <p className="loading">Loading...</p>
      </>
    );
  }
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* <Link className="links" to={"/products"}>
        <div>
          <h1 className="header">z-community</h1>
          <span className="showmore">slide more</span>
        </div>
      </Link> */}
      <div className="containers">
        <div className="grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="stackimg"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={product.images[0]}
                  alt={`${product.name} first image`}
                />
              ) : (
                <p>No images available</p>
              )}
              <p className="title-oversized">{product.name}</p>
              <p className="title-oversized-cut">Rs:₹{product.cutprice}</p>
              <p className="title-oversized-org">From RS: {product.price}</p>
              <button   onClick={() => navigate(`/products/${product._id}`)} className="title-addtocart">VIEW DETAILS</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendingshirt;
