import * as React from "react";
import { Stack } from "@fluentui/react";
import Typewriter from "typewriter-effect";
import { Card } from "../card/card";
import { ICardInterface } from "./cardsInterface";
import { CardDataInt } from "../card/cardInterface";

export const Cards = (props: ICardInterface) => {
  return (
    <>
      <h1
        style={{
          fontSize: "4.5em",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("MakeMyFood")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Welcomes You")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Now make your food like a story!")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Add your own recipe")
              .pauseFor(1200)
              .start();
          }}
        />
      </h1>
      <Stack horizontal wrap styles={{ inner: { justifyContent: "center" } }}>
        {props.data.map((card) => {
          return (
            <Card
              data={{
                id: card.id,
                name: card.name,
                description: card.description,
                user: card.user,
                goto: card.goto,
                isFavorite: card.isFavorite
              }}
              favorites={props.favorites}
            />
          );
        })}
      </Stack>
    </>
  );
};
