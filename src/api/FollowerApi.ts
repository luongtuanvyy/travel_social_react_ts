import { AxiosResponse } from 'axios';
import { axiosClientTravel } from './ApiClient';
import { ApiRespone, Follower, StateApiResponse } from '~/types/api';
import queryString from 'query-string';

export const FollowerApi = {
  getFollowersById: async (props: {
    id: string;
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Follower[]>>>> => {
    const urlParams = `/api/public/follows/getFollowByAccount?${queryString.stringify(
      props,
    )}`;
    return await axiosClientTravel.get(urlParams);
  },
  getTopFollowers: async (props: {
    email: string;
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Follower[]>>>> => {
    const urlParams = `/api/public/follows/getTopFollower?${queryString.stringify(
      props,
    )}`;
    return await axiosClientTravel.get(urlParams);
  },
};
