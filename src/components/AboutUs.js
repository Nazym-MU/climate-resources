import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="top-image-container">
        <img src="/san-francisco.jpg" alt="San Francisco" className="top-image" />
        <h1 className="top-image-text">Who We Are</h1>
      </div>
      <div className="container-about">
        <div className="content-about">
          <p>
            Welcome to our platform, which aims to provide resources and support for small businesses to prepare for climate risks. Our goal is to equip businesses with the knowledge and tools they need to mitigate risks and adapt to a changing environment.
          </p>
          <p>
            Our team consists of 5 students from Minerva University, the most innovative university in the world. Together with architects from Gensler, we researched the climate risks that small businesses face and developed this platform to help businesses assess and address these risks.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
