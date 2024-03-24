import React, { useState } from "react";
import { Nav } from "./components/nav/nav";
import { Cards } from "./components/cards/cards";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { data } from "./components/cards/card.data";

initializeIcons();

initializeIcons("https://my.cdn.com/path/to/icons/");

export const App: React.FunctionComponent = () => {
  const [loc, setLoc] = useState(0);
  const [text, setText] = useState("");

  const whichPage = (location: number) => {
    setLoc(location);
  };

  const searchText = (str: string) => {
    setText(str);
  };

  const renderElement = () => {
    const searchResults = data.filter((item) =>
      item.name.toLowerCase().includes(text)
    );

    switch (loc) {
      case 0:
        return <Cards data={data} loc={loc} />;
      case 1:
        return <>Add</>;
      case 2:
        return <Cards data={text === "" ? [] : searchResults} loc={loc} />;
      default:
        return <Cards data={data} loc={loc} />;
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(43deg, rgb(65, 88, 208) 40%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
          minHeight: "100vh",
        }}
      >
        <Nav whichPage={whichPage} l={loc} searchText={searchText} />
        {renderElement()}
      </div>
    </>
  );
};
