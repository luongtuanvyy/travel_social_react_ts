import { axiosClientTravel } from './ApiClient';

export const FollowerApi = {
  getFollowersById: async (props: { id: number }) => {
    const urlParams = `/api/user/follows/getFollowByAccountId?id=${props.id}`;
    const response = await axiosClientTravel.get(urlParams);
    return response;
  },
};
