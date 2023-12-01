import { VietNamLocation } from '~/types/api';

export const VietNamLocationApi = {
  getAll: async (): Promise<VietNamLocation[]> => {
    try {
      const response = await fetch('https://provinces.open-api.vn/api/');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};
