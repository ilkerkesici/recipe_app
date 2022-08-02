import {useNavigation} from '@react-navigation/native';
import {Recipe} from 'myModule/interfaces/recipe';
import {useCallback, useEffect, useState} from 'react';
import {RecipeService} from 'myModule';

interface ReturnType {
  loading: boolean;
  recipes: Recipe[];
  keyExtractor: (item: Recipe) => string;
  onPressStock: () => void;
}

export default function useHomeHook(): ReturnType {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const navigation = useNavigation();

  const keyExtractor = useCallback((item: Recipe) => item.id.toString(), []);

  const getRecipesList = useCallback(async () => {
    setLoading(true);
    const recipesResponse = await RecipeService.getRecipes();
    setRecipes(recipesResponse);
    setLoading(false);
  }, []);

  const onPressStock = useCallback(() => {
    navigation.navigate({key: 'STOCK', name: 'STOCK' as never});
  }, [navigation]);

  useEffect(() => {
    getRecipesList();
  }, [getRecipesList]);

  return {loading, recipes, keyExtractor, onPressStock};
}
