import { axiosClientTravel } from './ApiClient';

export const FollowerApi = {
  getFollowersById: async (props: { id: number }) => {
    const urlParams = `/api/user/follows/getFollowByAccount?id=13`;
    const response = await axiosClientTravel.get(urlParams);
    return response;
  },
};
