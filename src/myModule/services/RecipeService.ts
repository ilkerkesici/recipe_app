import APIError from '../helpers/APIError';
import APIHelper from '../helpers/ApiHelper';
import {Recipe, RecipeNewFormat} from 'myModule/interfaces/recipe';

class RecipeService {
  private convertRecipeToNewFormat = (recipe: Recipe): RecipeNewFormat => {
    const ingredients = Object.keys(recipe.ingredients);
    return {
      name: recipe.name,
      price: recipe.price,
      ingredients,
      has_cheese: ingredients.includes('cheese'),
      has_salt: ingredients.includes('salt'),
    };
  };

  getRecipes = async (): Promise<Recipe[]> => {
    const response = await APIHelper.get<Recipe[]>('/public/recipe/');
    if (response instanceof APIError) {
      return [];
    }
    return response;
  };

  getRecipesById = async (): Promise<Record<string, RecipeNewFormat>> => {
    const recipes = await this.getRecipes();
    const result: Record<string, RecipeNewFormat> = {};
    recipes.forEach(recipe => {
      result[recipe.id] = this.convertRecipeToNewFormat(recipe);
    });

    return result;
  };
}

export default new RecipeService();
