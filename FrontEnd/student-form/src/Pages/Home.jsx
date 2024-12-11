
import React, { useState } from "react";
import background from "../assets/background.svg";
import AuthPopup from "../PopUps/Signup";
const Home = () => {
  const [authPopupOpen, setAuthPopupOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // To toggle between Sign In and Sign Up

  const handleOpenPopup = (isSignUpMode) => {
    setIsSignUp(isSignUpMode);
    setAuthPopupOpen(true);
  };

  return (
    <>
      <div style={styles.container}>
        {/* Left Background Section */}
        <div
          style={{
            ...styles.backgroundSection,
            backgroundImage: `url(${background})`,
          }}
        ></div>

        {/* Right Text Section */}
        <div style={styles.textSection}>
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>Welcome to Student Registration</h1>
            <p style={styles.subtitle}>
              Register now and unlock your academic journey!
            </p>

            {/* Sign Up and Sign In Buttons */}
            <div style={styles.buttonGroup}>
             
              <button
                style={styles.button}
                onClick={() => handleOpenPopup(false)} // Open Sign In popup
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Popup */}
      {authPopupOpen && (
        <AuthPopup
          open={authPopupOpen}
          onClose={() => setAuthPopupOpen(false)}
          isSignUp={isSignUp}
          toggleSignUp={() => setIsSignUp(!isSignUp)} // Toggle between Sign In/Sign Up
        />
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",// Full screen width
    overflow: "hidden", 
    margin : "0",
    padding : "0",
  },
  backgroundSection: {
    width: "70vw",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  textSection: {
    width: "30vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  textContainer: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#343a40",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#6c757d",
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
  },

};

export default Home;

