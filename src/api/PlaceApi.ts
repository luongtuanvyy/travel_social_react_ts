import { AxiosResponse } from 'axios';
import { axiosClientTravel } from './ApiClient';
import { ApiRespone, StateApiResponse } from '~/types/api';
import { Place } from '~/types/entity';
import queryString from 'query-string';

export const PlaceApi = {
  getPlaces: async (params: {
    pageSize: number;
    page: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Place[]>>>> => {
    const paramsString = queryString.stringify(params);
    const apiParams = `/api/public/places?${paramsString}`;
    const response = await axiosClientTravel.get(apiParams);
    return response;
  },
};
