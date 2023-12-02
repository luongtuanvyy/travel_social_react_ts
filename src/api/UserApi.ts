import { AxiosResponse } from 'axios';
import queryString from 'query-string';
import { ApiRespone, StateApiResponse } from '~/types/api';
import { axiosClientTravel } from './ApiClient';
import { User } from '~/types/entity';

export const UserApi = {
  getUser: async (params: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<User[]>>>> => {
    const urlParams = `api/admin/accounts?${queryString.stringify(params)}`;
    return await axiosClientTravel(urlParams);
  },
  //   getUserById: async (id: string) => {},
  //   createUser: async (data: any) => {},
  //   updateUser: async (id: string, data: any) => {},
  //   deleteUser: async (id: string) => {},
};
