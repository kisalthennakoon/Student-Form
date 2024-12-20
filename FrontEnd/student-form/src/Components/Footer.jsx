// import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import required icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
                <p className="copyright">&copy; 2024 All rights reserved.</p>
            </div>
            <style>{`
  .footer {
    background-color: #4a87a7; /* Same as navbar for consistency */
    color: #ffffff;
    // overflow: "hidden", 
    padding: 20px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%; /* Full screen width */
    font-family: 'Poppins', sans-serif;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for depth */
  }

  .footer-content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-links {
    display: flex;
    gap: 15px; /* Spacing between social links */
    margin-bottom: 10px;
  }

  .social-link {
    color: #e6f0ff; /* Link color */
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    display: flex; /* Align icon and text */
    align-items: center; /* Center-align icon and text */
    gap: 8px; /* Spacing between icon and text */
  }

  .social-link:hover {
    text-decoration: underline;
    color: #ffffff;
  }

  .copyright {
    margin: 0;
    font-size: 0.9rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .social-links {
      flex-direction: column;
      gap: 10px; /* Adjust spacing for vertical alignment */
    }
  }
`}</style>
        </footer>
    );
};

export default Footer;
