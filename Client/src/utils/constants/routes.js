// Routes Configuration

const routes = [
  {
    path: "/",
    element: "PublicLayout", // No sidebar, clean layout for public users
    children: [
      // Public Routes - Anyone can access
      { path: "/", element: "HomePage" }, // Default home page
      {
        path: "restaurants",
        element: "RestaurantPage",
        children: [
          { path: "", element: "RestaurantHomePage" },
          { path: "detail/:id", element: "RestaurantDetailsPage" },
          { path: "about/:id", element: "RestaurantAboutPage" },
          { path: "menu/:id", element: "MenuPage" },
        ],
      },
      { path: "restaurant/:id", element: "RestaurantDetailsPage" },
      { path: "menu/:restaurantId", element: "MenuPage" },
      { path: "about", element: "AboutPage" },
      { path: "contact", element: "ContactPage" },

      // Auth Routes
      { path: "auth/login", element: "LoginPage" },
      { path: "auth/register", element: "RegisterPage" },
      { path: "auth/forgot-password", element: "ForgotPasswordPage" },

      // Protected Customer Routes - Requires login for actions
      {
        path: "customer",
        element: "CustomerProtectedRoute", // Custom route guard
        children: [
          { path: "cart", element: "CartPage" },
          { path: "checkout", element: "CheckoutPage" },
          { path: "orders", element: "OrderHistoryPage" },
          { path: "profile", element: "CustomerProfilePage" },
          { path: "order-tracking/:orderId", element: "OrderTrackingPage" },
        ],
      },
    ],
  },

  // Admin/Shopkeeper/Delivery Layout with Sidebar
  {
    path: "/dashboard",
    element: "DashboardLayout", // With sidebar for business users
    children: [
      // Shopkeeper Routes
      {
        path: "shopkeeper",
        element: "ProtectedRoute",
        roles: ["shopkeeper"],
        children: [
          { path: "", element: "ShopkeeperDashboard" },
          { path: "menu-management", element: "MenuManagementPage" },
          { path: "orders", element: "ShopOrdersPage" },
          { path: "profile", element: "ShopProfilePage" },
          { path: "analytics", element: "ShopAnalyticsPage" },
        ],
      },

      // Delivery Routes
      {
        path: "delivery",
        element: "ProtectedRoute",
        roles: ["delivery"],
        children: [
          { path: "", element: "DeliveryDashboard" },
          { path: "orders", element: "DeliveryOrdersPage" },
          { path: "profile", element: "DeliveryProfilePage" },
          { path: "earnings", element: "DeliveryEarningsPage" },
        ],
      },

      // Admin Routes
      {
        path: "admin",
        element: "ProtectedRoute",
        roles: ["admin"],
        children: [
          { path: "", element: "AdminDashboard" },
          { path: "users", element: "UsersManagementPage" },
          { path: "restaurants", element: "RestaurantsManagementPage" },
          { path: "orders", element: "AllOrdersPage" },
          { path: "analytics", element: "AdminAnalyticsPage" },
          { path: "settings", element: "SystemSettingsPage" },
        ],
      },
    ],
  },

  // Error Pages
  { path: "/unauthorized", element: "UnauthorizedPage" },
  { path: "/404", element: "NotFoundPage" },
  { path: "*", element: "NotFoundPage" },
];

export default routes;
