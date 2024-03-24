export type TFlashSale = {
  _id: string;
  name: string;
  image: string;
  amount: number;
  offer: number;
};

export type TTrendingProduct = {
  _id: string;
  name: string;
  image: string;
  amount: number;
  offer: number;
  ratings: number;
};
export type TAllProduct = {
  _id: string;
  name: string;
  image: string;
  amount: number;
  offer: number;
  ratings: number;
  category: string;
};
