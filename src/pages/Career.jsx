import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className="career-container">
      <h1 className="career-title">Join the LogicBunny Team</h1>
      <p className="career-intro">
        At LogicBunny, we're always on the lookout for talented and passionate individuals who are ready to take on new challenges and contribute to innovative solutions.
      </p>
      <h2 className="career-opportunities-title">Current Career Opportunities</h2>
      <ul className="career-opportunities-list">
        <li className="career-opportunity">
          <h3>Software Engineer</h3>
          <p>
            We're looking for skilled software engineers who are proficient in modern programming languages and passionate about building high-quality software.
          </p>
        </li>
        <li className="career-opportunity">
          <h3>UI/UX Designer</h3>
          <p>
            Join our design team to create intuitive and engaging user interfaces that delight our customers.
          </p>
        </li>
        <li className="career-opportunity">
          <h3>Product Manager</h3>
          <p>
            Lead our product development efforts and work closely with cross-functional teams to bring new ideas to life.
          </p>
        </li>
        <li className="career-opportunity">
          <h3>DevOps Engineer</h3>
          <p>
            Help us streamline our operations and ensure our systems are secure, scalable, and efficient.
          </p>
        </li>
      </ul>
      <p className="career-apply">
        If you're excited about what we do and think you'd be a great fit, we'd love to hear from you! Send your resume to <a href="mailto:careers@logicbunny.com">careers@logicbunny.com</a>.
      </p>
    </div>
  );
};

export default Career;
