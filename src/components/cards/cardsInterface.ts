import { CardDataInt, ICard } from "../card/cardInterface";

export interface ICardInterface {
  data: CardDataInt[];
  favorites: (id: CardDataInt) => void; 
}