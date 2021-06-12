import axiosClient from './axiosClient';

const cityApi = {
  getAll() {
    const url = '/cities';
    return axiosClient.get(url);
  },
};

export default cityApi;
