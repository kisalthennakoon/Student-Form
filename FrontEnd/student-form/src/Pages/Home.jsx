import React from "react";
import background from "../assets/background.svg";

const Home = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  backgroundSection: {
    width: "70vw", // 60% of the screen
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  textSection: {
    width: "40vw", // 40% of the screen
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Light gray background
  },
  textContainer: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better aesthetics
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#343a40", // Dark gray color
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#6c757d", // Muted gray color
  },
};

export default Home;
