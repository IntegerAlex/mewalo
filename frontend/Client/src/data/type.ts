// types.ts
export interface Product {
  id: string;
  name: string;
  img: string;
  type: string;
  price: number;
  tags?: string[];
}