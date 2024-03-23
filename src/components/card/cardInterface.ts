export interface ICard {
  data: CardDataInt
  favorites: (id: CardDataInt) => void; 
}

export interface CardDataInt{
  id: string,
  name: string,
  description: string,
  user: string,
  goto: string,
  isFavorite: boolean,
}