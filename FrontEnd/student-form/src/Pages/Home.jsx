import React from "react";
import Background from "../assets/background.svg";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to Student Registration</h1>
        <p style={styles.subtitle}>
          Register now and unlock your academic journey!
        </p>
      </div>
      <Background style={styles.svg} />
        
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // Light gray background
    overflow: "hidden",
  },
  textContainer: {
    zIndex: 1,
    textAlign: "center",
    color: "#fff",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#007bff", // Match SVG color
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#495057",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "auto",
  },
};

export default Home;
