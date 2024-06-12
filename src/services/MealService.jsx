import requests from "./httpRequests";

const BaseURL = "http://localhost:3000/api/v1";

const MealService = {
  getAllMeals: async () => {
    return requests.get(`${BaseURL}/meals`);
  },
  getSingleMeal: async (id) => {
    return requests.get(`${BaseURL}/meals/${id}`);
  },
  getMyMeals: async () => {
    return requests.get(`${BaseURL}/meals/my-meals`);
  },
  createMeal: async (data) => {
    const { name, price, description } = data;
    let meal = {
      name,
      price,
      description,
    };
    return requests.post(`${BaseURL}/meals`, meal);
  },

  updateMeal: async (id, data) => {
    return requests.put(`${BaseURL}/meals/${id}`, data);
  },

  deleteMeal: async (id) => {
    return requests.delete(`${BaseURL}/meals/${id}`);
  },
};

export default MealService;
