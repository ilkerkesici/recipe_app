import APIError from '../helpers/APIError';
import APIHelper from '../helpers/ApiHelper';
import {Stock} from '../interfaces/stock';

class StockService {
  getStockAll = async (): Promise<Stock[]> => {
    const response = await APIHelper.get<Stock[]>('/private/stock/');
    if (response instanceof APIError) {
      return [];
    }
    return response;
  };

  getStockById = async (id: number): Promise<Stock | null> => {
    const response = await APIHelper.get<Stock>(`/private/stock/${id}`);
    if (response instanceof APIError) {
      return null;
    }
    return response;
  };

  createStock = async (stock: Stock): Promise<Stock | null> => {
    const response = await APIHelper.post<Stock>('/private/stock/', stock);
    if (response instanceof APIError) {
      return null;
    }
    return response;
  };

  deleteStockById = async (id: number): Promise<Stock | null> => {
    const response = await APIHelper.delete<Stock>(`/private/stock/${id}`);
    if (response instanceof APIError) {
      return null;
    }
    return response;
  };

  updateStock = async (stock: Stock): Promise<Stock | null> => {
    const response = await APIHelper.put<Stock>('/private/stock/', stock);
    if (response instanceof APIError) {
      return null;
    }
    return response;
  };
}

export default new StockService();
