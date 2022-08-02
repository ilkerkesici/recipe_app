import {Request} from 'miragejs';
import {stockResponse} from '../responses/private';

export const handleGetStockAll = () => stockResponse;

export const handleCreateStock = (_: any, request: Request) => {
  const body = JSON.parse(request.requestBody);
  return body;
};
