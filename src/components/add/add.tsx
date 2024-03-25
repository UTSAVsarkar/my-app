import { Stack } from "@fluentui/react";
import { useState } from "react";

export const Add = () => {
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const welcomeElement = (): JSX.Element => {
    return (
      <h1
        style={{
          fontSize: "4.5em",
          textAlign: "center",
          color: "white",
          marginTop: window.innerHeight / 3 + 50,
        }}
      >
        Create Your Recipe!
      </h1>
    );
  };

  const userDetailsElement = (): JSX.Element => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <h1
            style={{
              fontSize: "4.5em",
              textAlign: "center",
              color: "white",
              marginTop: "18%",
            }}
          >
            Enter your details
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              outline: "none",
              margin: "10px", // adjust margin as needed
              color: "#333", // adjust text color
              fontFamily: "Arial, sans-serif", // adjust font family
            }}
          />
          <input
            type="text"
            placeholder="Enter your dish name"
            style={{
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              outline: "none",
              margin: "10px", // adjust margin as needed
              color: "#333", // adjust text color
              fontFamily: "Arial, sans-serif", // adjust font family
            }}
          />
          <textarea
            placeholder="Give a brief description about your dish"
            style={{
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              outline: "none",
              margin: "10px", // adjust margin as needed
              color: "#333", // adjust text color
              fontFamily: "Arial, sans-serif", // adjust font family
              height: 200,
            }}
          />
        </Stack>
      </div>
    );
  };

  const requirementsElement = (): JSX.Element => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <h1
            style={{
              fontSize: "4.5em",
              textAlign: "center",
              color: "white",
              marginTop: "18%",
            }}
          >
            Enter recipe requirements
          </h1>
          <textarea
            placeholder="Enter"
            style={{
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #ccc",
              background: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              outline: "none",
              margin: "10px", // adjust margin as needed
              color: "#333", // adjust text color
              fontFamily: "Arial, sans-serif", // adjust font family
              height: 200,
            }}
          />
        </Stack>
      </div>
    );
  };

  const renderElement = (): JSX.Element => {
    switch (step) {
      case 0:
        return welcomeElement();
      case 1:
        return userDetailsElement();
      case 2:
        return requirementsElement();
      default:
        return (
          <h1
            style={{
              fontSize: "4.5em",
              textAlign: "center",
              color: "white",
              marginTop: window.innerHeight / 3 + 50,
            }}
          >
            Create Your Recipe!
          </h1>
        );
    }
  };

  return (
    <Stack horizontal wrap styles={{ inner: { justifyContent: "center" } }}>
      <div style={{ padding: 10 }}>
        <div
          className="card"
          style={{
            width: "70rem",
            height: "44rem",
            background: "rgba(255, 255, 255, 0.16)",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.4px)",
            WebkitBackdropFilter: "blur(5.4px)",
            border: "1px solid rgba(255, 255, 255, 0.17)",
          }}
        >
          {renderElement()}
          <a
            className="btn btn-primary"
            style={{
              display: step < 1 ? "none" : "inline-block",
              padding: "10px 10px",
              textDecoration: "none",
              borderRadius: "15px",
              backgroundColor: isHovered
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(30px)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px",
              letterSpacing: "2px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease", // Adding transition for smooth effect
              position: "absolute",
              bottom: 0,
              margin: 10,
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={() => setStep(step - 1)}
          >
            back
          </a>
          <a
            className="btn btn-primary"
            style={{
              display: "inline-block",
              padding: "10px 10px",
              textDecoration: "none",
              borderRadius: "15px",
              backgroundColor: isHovered
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(30px)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px",
              letterSpacing: "2px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease", // Adding transition for smooth effect
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 10,
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            onClick={() => setStep(step + 1)}
          >
            next
          </a>
        </div>
      </div>
    </Stack>
  );
};
