import { AxiosResponse } from 'axios';
import { ApiRespone, BlogNotification, StateApiResponse } from '~/types/api';
import { axiosClientTravel } from './ApiClient';
import queryString from 'query-string';

export const BlogNotificationApi = {
  getBlogNotification: async (props: {
    page: number;
    pageSize: number;
  }): Promise<
    AxiosResponse<ApiRespone<StateApiResponse<BlogNotification[]>>>
  > => {
    const urlParams = `/api/user/getAllBlogNotification?${queryString.stringify(props)}`;
    return await axiosClientTravel.get(urlParams);
  },
};
