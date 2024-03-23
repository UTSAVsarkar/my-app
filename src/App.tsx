import React, { useState } from 'react';
import { Nav } from './components/nav/nav';
import { Cards } from './components/cards/cards';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

initializeIcons('https://my.cdn.com/path/to/icons/');

export const App: React.FunctionComponent = () => {
  const [loc, setLoc] = useState(0)

  const whichPage = (location: number) => {
    setLoc(location);
  }

  const renderElement = () => {
    switch (loc) {
      case 0: return <Cards />;
      case 1: return <></>;
      default: return <Cards />;
    }
  }

  return <>
    <div style={{
      backgroundColor: 'white',
      backgroundImage: "linear-gradient(43deg, rgb(65, 88, 208) 40%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
      minHeight: "100vh"
    }}>
      <Nav whichPage={whichPage} l={loc} />
      {renderElement()}
    </div>
  </>
};
