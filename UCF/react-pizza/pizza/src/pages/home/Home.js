import React from "react";
import Pic from "../../assets/images/pizza.jpg";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Pic} alt="" className="home__img" />

      <div>
        <div>
            <h1>Shannon's <span>Pizza</span></h1>
            <p>Welcome to Shannon's pizza house where we aim to please and make your experience one that you'll remember for ages </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
