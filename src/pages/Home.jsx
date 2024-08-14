import React from 'react';
import './Home.css'; // Add your styling here
import heroImage from '../Assets/techBanner.png'; // Adjust the path to where your image is stored

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
        <h1>Welcome to LogicBunny Technology</h1>
        <p>Innovative Solutions for a Digital World</p>
        <a href="#services" className="cta-button">Discover Our Services</a>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <h2>About Us</h2>
        <p>We are a leading technology firm specializing in web and mobile solutions. Our mission is to drive digital transformation and success for our clients.</p>
      </section>

      {/* Key Services */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building dynamic and responsive websites to meet your business needs.</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>Creating engaging mobile applications for iOS and Android platforms.</p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>Transforming IT infrastructure with scalable and secure cloud services.</p>
          </div>
          <div className="service-card">
            <h3>IT Consulting</h3>
            <p>Providing expert guidance to optimize your technology investments.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="portfolio-section">
        <h2>Featured Projects</h2>
        <div className="portfolio-grid">
          <div className="project-card">
            {/* <img src="../Assets/rummy-game.png" alt="Rummy Game" className="project-image" /> */}
            <h3>Rummy Game</h3>
            <p><strong>Overview:</strong> A real-time multiplayer Rummy game that offers a seamless and engaging experience for players. Built with advanced algorithms to ensure fair play, the game supports various Rummy formats.</p>
            <p><strong>Technologies Used:</strong> Node.js, Socket.io, React.js, MongoDB, AWS.</p>
            <ul>
              <li style={{listStyle:"none"}}>Real-time gameplay with smooth animations.</li>
              <li style={{listStyle:"none"}}>Real-time gameplay with smooth animations.</li>
              <li style={{listStyle:"none"}} >Robust anti-cheating mechanisms.</li>
              <li style={{listStyle:"none"}}>Cross-platform support for web and mobile devices.</li>
            </ul>
            <p><strong>Client:</strong> Confidential</p>
            <p><strong>Outcome:</strong> Achieved over 10,000 active users within the first month of launch.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <blockquote>
            "LogicBunny Technology exceeded our expectations with their innovative solutions and exceptional service."
            <footer>- Client Name</footer>
          </blockquote>
          {/* Add more testimonials here */}
        </div>
      </section>
    </div>
  );
};

export default Home;
