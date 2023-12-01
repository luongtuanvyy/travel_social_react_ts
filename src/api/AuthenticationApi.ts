import { axiosClientTravel } from './ApiClient';
import { ApiRespone, Auth } from '~/types/api';
import { AxiosResponse } from 'axios';

export const AuthenticationApi = {
  login: async (
    email: string,
    password: string,
  ): Promise<AxiosResponse<ApiRespone<Auth>>> => {
    try {
      const response = await axiosClientTravel.post('/api/auth/login', {
        email,
        password,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  loginWithFirebase: async (
    token: string,
    type: string,
  ): Promise<AxiosResponse<ApiRespone<Auth>>> => {
    try {
      const response = await axiosClientTravel.post(
        '/api/auth/login/firebase',
        {
          token,
          type,
        },
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};
