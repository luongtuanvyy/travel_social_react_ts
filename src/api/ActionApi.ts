import { AxiosResponse } from 'axios';
import { ApiRespone } from '~/types/api';
import { axiosClientTravel } from './ApiClient';

export const ActionBlogApi = {
  like: async (props: {
    id: number;
  }): Promise<AxiosResponse<ApiRespone<String[]>>> => {
    return await axiosClientTravel.post(`/api/user/blogs/like?id=${props.id}`);
  },
};
