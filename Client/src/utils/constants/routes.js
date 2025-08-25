// src/utils/constants/routes.js
const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",

  CUSTOMER: {
    HOME: "/customer/home",
    RESTAURANT: "/customer/restaurants/:id",
    CHECKOUT: "/customer/checkout",
    TRACK_ORDER: "/customer/orders/:id"
  },

  SHOPKEEPER: {
    DASHBOARD: "/shopkeeper/dashboard",
    MENU: "/shopkeeper/menu",
    ORDERS: "/shopkeeper/orders"
  },

  DELIVERY: {
    DASHBOARD: "/delivery/dashboard",
    ORDERS: "/delivery/orders"
  },

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
    SHOPS: "/admin/shops"
  }
};

export default ROUTES;
