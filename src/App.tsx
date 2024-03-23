import React, { useState } from 'react';
import { Nav } from './components/nav/nav';
import { Cards } from './components/cards/cards';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { data } from './components/cards/card.data';
import { CardDataInt, ICard } from './components/card/cardInterface';

initializeIcons();

initializeIcons('https://my.cdn.com/path/to/icons/');

export const App: React.FunctionComponent = () => {
  const [loc, setLoc] = useState(0)
  const [selectedId, setSelectedId] = useState<CardDataInt[]>([])

  const whichPage = (location: number) => {
    setLoc(location);
  }

  const favorites = (id: CardDataInt): void => {
    const prevList: CardDataInt[] = selectedId;
    prevList.push({
      id: id.id,
      name: id.name,
      description: id.description,
      user: id.user,
      goto: id.goto,
      isFavorite: true,
    });

    setSelectedId(prevList)
  }

  const renderElement = () => {
    switch (loc) {
      case 0: return <Cards data={data} favorites={favorites} />;
      case 1: return <Cards data={selectedId} favorites={favorites} />;
      case 2: return <></>;
      default: return <Cards data={data} favorites={favorites} />;
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
