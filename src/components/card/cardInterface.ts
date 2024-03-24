export interface ICard {
  id: string;
  name: string;
  description: string;
  user: string;
  goto: string;
  requirements: string[];
  steps: string[][];
}
