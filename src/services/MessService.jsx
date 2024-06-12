import requests from "./httpRequests";

const BaseURL = "http://localhost:3000/api/v1";
const MessService = {
  getAllMess: async () => {
    return requests.get(`${BaseURL}/messes`);
  },
  getSingleMess: async (id) => {
    return requests.get(`${BaseURL}/messes/${id}`);
  },
  getMyMess: async () => {
    return requests.get(`${BaseURL}/messes/my-mess`);
  },
  createMess: async (data) => {
    const { name, phone, address } = data;
    let mess = {
      name,
      phone,
      address,
    };
    return requests.post(`${BaseURL}/messes`, mess);
  },

  updateMess: async (id, data) => {
    return requests.put(`${BaseURL}/messes/${id}`, data);
  },

  deleteMess: async (id) => {
    return requests.delete(`${BaseURL}/messes/${id}`);
  },
};

export default MessService;
