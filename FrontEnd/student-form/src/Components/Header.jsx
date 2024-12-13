// Import necessary libraries
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons
import { useState } from 'react'; // Import useState hook
import logo from "../assets/logo.webp"; // Import logo
import { Box } from '@mui/material';
   import { Link } from "react-router-dom";

const Header = () => {
    const [isSignUp, setIsSignUp] = useState(false); // Moved useState inside the component
    const [authPopupOpen, setAuthPopupOpen] = useState(false); // Added missing state

    const handleOpenPopup = (isSignUpMode) => {
        setIsSignUp(isSignUpMode);
        setAuthPopupOpen(true);
    };

    return (
        <div>
        <nav className="navbar">
            <Box
                display="flex"
                //justifyContent="center"
                alignItems="center"
                minHeight="10vh"
                width="50vw"
                sx={{ backgroundColor: "#4a87a7" }}
            >
                <div className="navbar-logo" style={{ display: 'flex', alignItems: 'right', gap: '10px' }}>
                    <img src={logo} alt="Logo" width="40px" style={{ borderRadius: '100%' }} /> {/* Adjusted width for better visibility */}
                    <h1>Technology Institute</h1>
                </div>
            </Box>
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/register">Student Register</a></li>
             

                <li>
                    <Link to="/sign-in" onClick={() => handleOpenPopup(false)}>
                        <FaSignInAlt /> Details Edit
                    </Link>
                </li>

                {/* <li>
                    <a
                        href="/sign-up"
                        onClick={(e) => {
                            e.preventDefault();
                            handleOpenPopup(true);
                        }}
                    >
                        <FaUserPlus /> Sign Up
                    </a>
                </li> */}
            </ul>
        </nav>
    
        {/* Auth Popup */}
        {authPopupOpen && (
            <AuthPopup
                open={authPopupOpen}
                onClose={() => setAuthPopupOpen(false)}
                isSignUp={isSignUp}
                toggleSignUp={() => setIsSignUp(!isSignUp)}
            />
        )}
    
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 80px;
                position: fixed;
                top: 0;
                left: 0;
                background-color: #4a87a7;
                padding: 10px 20px;
                color: white;
                z-index: 1000;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
    
            .navbar-logo {
                display: flex;
                align-items: center; /* Align items vertically */
                gap: 10px; /* Add spacing between logo and text */
            }
    
            .navbar-logo h1 {
                margin: 0;
                font-size: 1.5rem;
                font-weight: 600;
                color: #ffffff;
            }
    
            .navbar-links {
                list-style: none;
                display: flex;
                gap: 20px;
                margin: 0;
                padding: 0;
            }
    
            .navbar-links li {
                margin: 0;
            }
    
            .navbar-links li a {
                color: #e6f0ff;
                text-decoration: none;
                font-size: 1rem;
                font-weight: 500;
                transition: color 0.3s ease-in-out;
                display: flex;
                align-items: center;
                gap: 8px;
            }
    
            .navbar-links li a:hover {
                text-decoration: underline;
                color: #ffffff;
            }
    
            @media (max-width: 768px) {
                .navbar {
                    flex-direction: column;
                    height: auto;
                    padding: 15px;
                }
                .navbar-links {
                    flex-direction: column;
                    gap: 15px;
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
