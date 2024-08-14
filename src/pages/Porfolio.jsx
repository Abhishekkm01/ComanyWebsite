import React from 'react';
import './Portfolio.css'; // Make sure to create this CSS file for styling

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-item">
        <h2>Rummy Game</h2>
        <p><strong>Overview:</strong> A real-time multiplayer Rummy game that offers a seamless and engaging experience for players. Built with advanced algorithms to ensure fair play, the game supports various Rummy formats.</p>
        <p><strong>Technologies Used:</strong> Node.js, Socket.io, React.js, MongoDB, AWS.</p>
        <ul>
          <li>Real-time gameplay with smooth animations.</li>
          <li>Robust anti-cheating mechanisms.</li>
          <li>Cross-platform support for web and mobile devices.</li>
        </ul>
        <p><strong>Client:</strong> Confidential</p>
        <p><strong>Outcome:</strong> Achieved over 10,000 active users within the first month of launch.</p>
      </div>

      <div className="portfolio-item">
        <h2>Ludo Game</h2>
        <p><strong>Overview:</strong> A classic board game reimagined for the digital age. The Ludo game provides a fun, interactive platform for friends and families to connect and play together.</p>
        <p><strong>Technologies Used:</strong> JavaScript, WebSocket, HTML5, CSS3.</p>
        <ul>
          <li>Multiplayer mode with up to 4 players.</li>
          <li>Chat functionality to enhance the social experience.</li>
          <li>AI-based opponents for single-player mode.</li>
        </ul>
        <p><strong>Client:</strong> Confidential</p>
        <p><strong>Outcome:</strong> Successfully maintained a 4.5-star rating on app stores.</p>
      </div>

      <div className="portfolio-item">
        <h2>Other Projects</h2>
        <p><strong>Project Name 1:</strong> A web-based KYC service platform designed to streamline the customer verification process for financial institutions.</p>
        <p><strong>Technologies Used:</strong> Node.js, MySQL, Express.</p>
        <p><strong>Outcome:</strong> Reduced KYC processing time by 50%.</p>
      </div>
    </div>
  );
};

export default Portfolio;
