import { Ingredient } from "./ingredient";

export interface Recipe{
  id: number;
  title: string;
  description: string;
  instructions: string[];
  cookingTime: number;
  difficulty:string;
  ingredients:Ingredient[];
  imageUrl:string;
  category:string;
  favorite:boolean
}
