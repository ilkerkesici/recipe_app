import {createServer} from 'miragejs';

import {BASE_URL} from 'config';
import {handleGetRecipe} from './handlers/public';
import {handleCreateStock, handleGetStockAll} from './handlers/private';

const MockModels = {};

const MockFactories = {};

export const createMockServer = () => {
  const server = createServer<typeof MockModels, typeof MockFactories>({
    models: {},
    routes() {
      this.get(`${BASE_URL}/public/recipe/`, handleGetRecipe);
      this.get(`${BASE_URL}/private/stock/`, handleGetStockAll);

      this.post(`${BASE_URL}/private/stock/`, handleCreateStock);

      this.passthrough(`${BASE_URL}/***`);
    },
  });

  return server;
};
