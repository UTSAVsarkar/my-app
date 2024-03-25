import { Icon, Stack } from "@fluentui/react";
import { useState } from "react";
import { IAdd } from "./add.types";
import { Card } from "../card/card";
import { ICard } from "../card/cardInterface";

export const Add = (props: IAdd) => {
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const [count, setCount] = useState(0);

  const [name, setName] = useState<string>("");
  const [dishName, setDishName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [required, setRequired] = useState<string>("");
  const [steps, setSteps] = useState(new Map<number, string>([]));

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
            value={name}
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
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            type="text"
            placeholder="Enter your dish name"
            value={dishName}
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
            onChange={(e) => setDishName(e.currentTarget.value)}
          />
          <textarea
            placeholder="Give a brief description about your dish"
            value={description}
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
            onChange={(e) => setDescription(e.currentTarget.value)}
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
          <input
            type="text"
            placeholder="Enter ingridients required for your dish and press enter"
            value={required}
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
            onChange={(e) => setRequired(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && required) {
                setRequirements([...requirements, required.trim()]);
                setRequired("");
              }
            }}
          />
          <div>
            <Stack horizontal wrap tokens={{ childrenGap: 5 }}>
              {requirements.map((tag, index) => (
                <div key={index}>
                  <span className="badge rounded-pill bg-warning text-dark">
                    {tag}
                    <Icon
                      iconName="Cancel"
                      onClick={() =>
                        setRequirements(requirements.filter((i) => i !== tag))
                      }
                      style={{ marginLeft: 5, cursor: "pointer" }}
                      styles={{ root: { fontSize: 10 } }}
                    />
                  </span>
                </div>
              ))}
            </Stack>
          </div>
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
              value={count}
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
                    value={steps.get(index)}
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
                    onChange={(e) => {
                      const newMap = new Map(steps);
                      newMap.set(index, e.currentTarget.value);
                      setSteps(newMap);
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
    const cleanUpSteps: string[][] = [];

    steps.forEach((i) => {
      const parts = i.split(".").map((part) => part.trim());
      const newList = parts.filter((part) => part !== "");
      cleanUpSteps.push(newList);
    });

    const testData = {
      id: "1",
      name: dishName,
      description: description,
      user: name,
      goto: "#",
      requirements: requirements,
      steps: cleanUpSteps,
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
                const cleanUpSteps: string[][] = [];

                steps.forEach((i) => {
                  const parts = i.split(".").map((part) => part.trim());
                  const newList = parts.filter((part) => part !== "");
                  cleanUpSteps.push(newList);
                });

                const newData: ICard = {
                  id: "1",
                  name: dishName,
                  description: description,
                  user: name,
                  goto: "#",
                  requirements: requirements,
                  steps: cleanUpSteps,
                };

                props.addCard(newData);
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
