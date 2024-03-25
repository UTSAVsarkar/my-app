import { Stack } from "@fluentui/react";
import { useState } from "react";
import { IAdd } from "./add.types";
import { Card } from "../card/card";

export const Add = (props: IAdd) => {
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const [count, setCount] = useState(0);

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
            placeholder="Enter the ingridients required for your dish"
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

  const stepsElement = (): JSX.Element => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <h1
            style={{
              fontSize: "4.5em",
              textAlign: "center",
              color: "white",
            }}
          >
            Enter the steps to cook
          </h1>
          <Stack>
            <input
              type="number"
              max={8}
              min={0}
              placeholder="Number of steps? (It should be less than 9)"
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
              onChange={(ev) => {
                setCount(parseInt(ev.currentTarget.value));
              }}
            />
            {count < 9 &&
              Array.from({ length: count }, (_, index) => (
                <>
                  <input
                    placeholder={`Enter Step-${index + 1}`}
                    key={index}
                    type="text"
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
                </>
              ))}
          </Stack>
        </Stack>
      </div>
    );
  };

  const previewElement = (): JSX.Element => {
    const testData = {
      id: "1",
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish with bacon, eggs, and cheese.",
      user: "ItalianChef",
      goto: "#",
      requirements: [
        "Spaghetti",
        "Bacon",
        "Eggs",
        "Parmesan Cheese",
        "Black Pepper",
      ],
      steps: [
        ["Cook pasta in salted boiling water until al dente."],
        ["Reserve some pasta water."],
        [
          "In a separate pan, cook diced bacon until crispy.",
          "Remove excess fat.",
        ],
        ["In a bowl, whisk eggs with grated Parmesan cheese and black pepper."],
        [
          "Add cooked spaghetti to the pan with bacon.",
          "Pour in egg mixture.",
          "Stir quickly to combine.",
        ],
        [
          "If too dry, add reserved pasta water to create a creamy sauce.",
          "Serve hot with extra cheese.",
        ],
      ],
    };

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
            Here is your recipe card
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              id={testData.id}
              name={testData.name}
              description={testData.description}
              user={testData.user}
              goto={testData.goto}
              requirements={testData.requirements}
              steps={testData.steps}
            />
          </div>
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
      case 3:
        return stepsElement();
      case 4:
        return previewElement();
    }
    return <></>;
  };

  const buttonName = (): string => {
    switch (step) {
      case 3:
        return "preview";
      case 4:
        return "publish";
      default:
        return "next";
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
            onClick={() => {
              if (step === 4) {
                props.whichPage(0);
              }
              setStep(step + 1);
            }}
          >
            {buttonName()}
          </a>
        </div>
      </div>
    </Stack>
  );
};
