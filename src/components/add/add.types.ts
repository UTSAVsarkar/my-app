import { ICard } from "../card/cardInterface";

export interface IAdd {
  whichPage: (loc: number) => void;
  addCard: (newData: ICard) => void;
}
