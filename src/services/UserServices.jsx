import AddMember from "../components/AddMember/AddMember";
import requests from "./httpRequests";

const UserServices = {
  getAllusers: async () => {
    return requests.get(`/users`);
  },
  getSingleUser: async (id) => {
    return requests.get(`/users/${id}`);
  },
  getLoggedInUser: async () => {
    return requests.get(`/users/me`);
  },
  createUser: async (data) => {
    const { name, email, password } = data;
    let user = {
      username: name,
      email: email,
      password: password,
    };
    return requests.post(`/users/create-admin`, user);
  },
  AddMember: async (data) => {
    return requests.post(`/users`, data);
  },

  updateUser: async (id, data) => {
    return requests.put(`/users/${id}`, data);
  },

  deleteUser: async (id) => {
    return requests.delete(`/users/${id}`);
  },

  login: async (data) => {
    return requests.post(`/auth/login`, data);
  },
};

export default UserServices;
