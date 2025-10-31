const API_PATHS = {
  AUTH: {
    LOGIN: "/user/login",
    SIGNUP: "/user/signup",
  },

  USER: {
    USER_BY_ID: "/user",
    UPDATE: "/update",
    DELETE: "/delete",
  },

  PRODUCT: {
    ALL_PRODUCTS: "/product",
    CREATE_PRODUCT: "/product/add",
    PRODUCT_BY_ID: "/product/",
    UPDATE_PRODUCT: "/product/update",
    DELETE_PRODUCT: "/product/delete",
  },

  PET: {
    ALL_PETS: "/petRoute",
    CREATE_PET: "/petRoute/addPet",
    PET_BY_ID: "/petRoute/",
    UPDATE_PET: "/petRoute/updatePet",
    DELETE_PET: "/petRoute/deletePet",
  },
};

export default API_PATHS;
