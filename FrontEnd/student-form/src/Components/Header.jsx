// import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1>Technology Institute</h1>
                </div>
                <ul className="navbar-links">
                    <li><a href="home">Home</a></li>
                    <li><a href="register">Student Register</a></li>
                    <li>
                        <a href="sign-in">
                            <FaSignInAlt /> Sign In
                        </a>
                    </li>
                    <li>
                        <a href="sign-up">
                            <FaUserPlus /> Sign Up
                        </a>
                    </li>
                </ul>
            </nav>
            <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px; /* Reduced height for a modern look */
    position: fixed;
    top: 0;
    left: 0;
    background-color: #4a87a7; /* Primary color */
    padding: 10px 20px; /* Better padding for spacing */
    color: white;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; /* Modern font */
  }

  .navbar-logo h1 {
    margin: 0;
    font-size: 1.5rem; /* Slightly larger font size */
    font-weight: 600; /* Bold weight for emphasis */
    color: #ffffff;
  }

  .navbar-links {
    list-style: none;
    display: flex;
    gap: 20px; /* Increased gap for better spacing */
    margin: 0;
    padding: 0;
  }

  .navbar-links li {
    margin: 0;
  }

  .navbar-links li a {
    color: #e6f0ff;
    text-decoration: none;
    font-size: 1rem; /* Consistent font size */
    font-weight: 500;
    transition: color 0.3s ease-in-out;
    display: flex;
    align-items: center; /* Align icons and text */
    gap: 8px; /* Spacing between icon and text */
  }

  .navbar-links li a:hover {
    text-decoration: underline;
    color: #ffffff;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      height: auto;
      padding: 15px;
    }
    .navbar-links {
      flex-direction: column;
      gap: 15px; /* Adjust gap for vertical alignment */
    }
    .navbar-logo h1 {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`}</style>
        </div>
    );
};

export default Header;
