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
  register: async (params: {
    email: string;
    password: string;
    name: string;
  }): Promise<AxiosResponse<ApiRespone<Auth>>> => {
    try {
      const response = await axiosClientTravel.post(
        '/api/auth/register',
        params,
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  sendOTP: async (data: { gmail: string; status: string }) => {
    const formData = new FormData();
    formData.append('gmail', data.gmail);
    formData.append('status', data.status);

    try {
      return await axiosClientTravel.post('/api/auth/otp', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      throw error;
    }
  },
  verifyOTP: async (
    otp: string,
  ): Promise<AxiosResponse<ApiRespone<String>>> => {
    const formData = new FormData();
    formData.append('otp', otp);
    try {
      return await axiosClientTravel.post('/api/auth/verify', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      throw error;
    }
  },
};
