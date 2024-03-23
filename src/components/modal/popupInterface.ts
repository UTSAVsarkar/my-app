import { ICard } from "../card/cardInterface";

export interface IPopupInt {
  cardData: ICard;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
