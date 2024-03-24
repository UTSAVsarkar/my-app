import { DefaultPalette, IconButton, Stack } from "@fluentui/react";
import { useState } from "react";

export const Add = () => {
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const itemStyles: React.CSSProperties = {
    alignItems: "center",
    display: "flex",
    height: 50,
    justifyContent: "center",
    width: 50,
    margin: 20,
  };

  const renderElement = (): JSX.Element => {
    switch (step) {
      case 0:
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
      case 1:
        return <p>hello</p>;
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

  const getMarginTop = (): string => {
    switch (step) {
      case 0:
        return "20%";
      default:
        return "20%";
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

          <Stack
            enableScopedSelectors
            horizontal
            horizontalAlign="space-between"
            style={{ marginTop: getMarginTop() }}
          >
            <span style={itemStyles}>
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
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
                onClick={() => setStep(step - 1)}
              >
                back
              </a>
            </span>
            <span
              style={{
                alignItems: "center",
                display: "flex",
                height: 50,
                justifyContent: "center",
                width: 50,
                margin: 20,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              ←{step}/5→
            </span>
            <span style={itemStyles}>
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
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
                onClick={() => setStep(step + 1)}
              >
                next
              </a>
            </span>
          </Stack>
        </div>
      </div>
    </Stack>
  );
};
