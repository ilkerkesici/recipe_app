import {BASE_URL} from 'config';
import Axios, {AxiosRequestHeaders} from 'axios';
import APIError from './APIError';

class ApiHelper {
  private token?: string;

  private getHeaders(): AxiosRequestHeaders {
    if (this.token) {
      return {
        'Bearer Token': this.token,
      };
    }

    return {};
  }

  async get<T>(endpoint: string): Promise<T | APIError> {
    try {
      const response = await Axios.get(`${BASE_URL}${endpoint}`, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      return new APIError('Server Error');
    }
  }

  async post<T>(endpoint: string, body: any): Promise<T | APIError> {
    try {
      const response = await Axios.post(`${BASE_URL}${endpoint}`, body, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      return new APIError('Server Error');
    }
  }

  async put<T>(endpoint: string, body: any): Promise<T | APIError> {
    try {
      const response = await Axios.put(`${BASE_URL}${endpoint}`, body, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      return new APIError('Server Error');
    }
  }

  async delete<T>(endpoint: string): Promise<T | APIError> {
    try {
      const response = await Axios.delete(`${BASE_URL}${endpoint}`, {
        headers: this.getHeaders(),
      });
      return response.data;
    } catch (error) {
      return new APIError('Server Error');
    }
  }

  setToken(token: string) {
    this.token = token;
  }
}

export default new ApiHelper();
