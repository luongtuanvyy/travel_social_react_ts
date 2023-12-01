import { Blog } from '~/types/entity';
import { axiosClientTravel } from './ApiClient';
import { AxiosResponse } from 'axios';
import { ApiRespone, StateApiResponse } from '~/types/api';
import queryString from 'query-string';

export const BlogApi = {
  getAllBlog: async (params: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Blog[]>>>> => {
    const urlParams = `/api/public/blogs?${queryString.stringify(params)}`;
    console.log(urlParams);

    const response = await axiosClientTravel.get(urlParams);
    return response;
  },
};
