import RecipeService from './services/RecipeService';
import StockService from './services/StockService';
import ApiHelper from './helpers/ApiHelper';

const setAuthorizationToken = (token: string) => {
  ApiHelper.setToken(token);
};

export {RecipeService, StockService, setAuthorizationToken};
