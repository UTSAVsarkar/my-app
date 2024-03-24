export interface INavInterface {
  l: number;
  whichPage: (Location: number) => void;
  searchText: (str: string) => void;
}
