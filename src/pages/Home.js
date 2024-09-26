import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HomeStyles.css';
const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing option
    });
  }, []);

  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer" data-aos="fade-up">
          <h1 data-aos="fade-down">Gharvala Pyar</h1>
          <p data-aos="fade-right" data-aos-delay="200">Sweet Healthy Incredible Vegetarian Food</p>
          <Link to="/menu">
            <button data-aos="zoom-in" data-aos-delay="400">ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
