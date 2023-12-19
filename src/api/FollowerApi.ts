import { AxiosResponse } from 'axios';
import { axiosClientTravel } from './ApiClient';
import { ApiRespone, Follower, StateApiResponse } from '~/types/api';
import queryString from 'query-string';

export const FollowerApi = {
  getFollowersById: async (props: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Follower[]>>>> => {
    const urlParams = `/api/user/follows/list-follow-you?${queryString.stringify(
      props,
    )}`;
    return await axiosClientTravel.get(urlParams);
  },
  getTopFollowers: async (props: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Follower[]>>>> => {
    const urlParams = `/api/user/follows/get-top?${queryString.stringify(
      props,
    )}`;
    return await axiosClientTravel.get(urlParams);
  },
};
