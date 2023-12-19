import { AxiosResponse } from 'axios';
import { ApiRespone, Comment, StateApiResponse } from '~/types/api';
import { axiosClientTravel } from './ApiClient';
import { Tour } from '~/types/entity';
import queryString from 'query-string';

export const TourApi = {
  getTourHot: async (): Promise<
    AxiosResponse<ApiRespone<StateApiResponse<Tour[]>>>
  > => {
    try {
      const response = await axiosClientTravel.get('/api/public/tours');
      return response;
    } catch (error) {
      throw error;
    }
  },
  getAllTour: async (params: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Tour[]>>>> => {
    const urlparams = `/api/public/tours?${queryString.stringify(params)}`;

    const response = await axiosClientTravel.get(urlparams);
    return response;
  },
  getTourById: async (
    id: number,
  ): Promise<AxiosResponse<ApiRespone<StateApiResponse<Tour[]>>>> => {
    const urlparams = `/api/public/tours?id=${id}`;
    const response = await axiosClientTravel.get(urlparams);
    return response;
  },
  getTourWithFilter: async (params: {
    page: number;
    pageSize: number;
  }): Promise<AxiosResponse<ApiRespone<StateApiResponse<Tour[]>>>> => {
    const urlparams = `/api/public/tours?${queryString.stringify(params)}`;
    const result = await axiosClientTravel.get(urlparams);
    return result;
  },
  getComment: async (
    id: number,
  ): Promise<AxiosResponse<ApiRespone<StateApiResponse<Comment[]>>>> => {
    return await axiosClientTravel.get(
      `/api/public/reviews/findByTourId?id=${id}`,
    );
  },
};
