export interface Recipe {
  id: string;
  name: string;
  price: number;
  ingredients: Record<string, number>;
}

export interface RecipeNewFormat {
  name: string;
  price: number;
  ingredients: string[];
  has_cheese: boolean;
  has_salt: boolean;
}
