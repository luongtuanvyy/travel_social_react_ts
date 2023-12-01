import { AxiosResponse } from 'axios';
import { User } from 'firebase/auth';
import queryString from 'query-string';
import { ApiRespone } from '~/types/api';
import { axiosClientTravel } from './ApiClient';

export const UserApi = {
  getUser: async (params: {
    page: number;
    amount: number;
  }): Promise<AxiosResponse<ApiRespone<User[]>>> => {
    const urlParams = `api/admin/accounts? ${queryString.stringify(params)}`;
    const result = await axiosClientTravel(urlParams);
    return result;
  },
  //   getUserById: async (id: string) => {},
  //   createUser: async (data: any) => {},
  //   updateUser: async (id: string, data: any) => {},
  //   deleteUser: async (id: string) => {},
};
