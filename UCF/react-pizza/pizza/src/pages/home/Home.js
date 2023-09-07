import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Pic from "../../assets/images/pizza.jpg";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Pic} alt="" className="home__img" />

      <div>
        <div className="home__data">
            <h1 className="home__title">Shannon's <span>Pizza</span></h1>
            <p>Welcome to Shannon's pizza house where we aim to please and make your experience one that you'll remember for ages </p>
            <Link to='/menu'  className='button'>
              Order{''} 
              <span className="button__icon"><FaArrowRight/></span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
