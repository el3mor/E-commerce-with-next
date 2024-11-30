import axiosClient from './axiosClinet';

const createOrder = (data) => axiosClient.post("/orders", data);

export default {
  createOrder,
};
