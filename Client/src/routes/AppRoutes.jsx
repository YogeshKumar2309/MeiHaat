
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import routes from '../utils/routes';
// import ProtectedRoute from '../components/common/ProtectedRoute/ProtectedRoute';

// Import all page components
import PublicLayout from '../components/layout/PublicLayout';
import HomePage from '../pages/customer/HomePage/HomePage.jsx';
import RestaurantsPage from '../pages/customer/RestaurantPage/RestaurantsPage.jsx'
import RestaurantDetailsPage from '../pages/customer/RestaurantPage/RestaurantDetailsPage.jsx'
import MenuPage from '../pages/customer/RestaurantPage/MenuPage.jsx'
import AboutPage from '../pages/customer/RestaurantPage/AboutPage.jsx'
import ContactPage from '../pages/customer/RestaurantPage/ContactPage.jsx'
import LoginPage from '../pages/auth/LoginPage/LoginPage.jsx'
import RegisterPage from '../pages/auth/RegisterPage/RegisterPage.jsx'
import ForgotPasswordPage from '../pages/auth/ForgetPassPage/ForgotPasswordPage.jsx'


// Map string to actual components
const pageComponents = {
  PublicLayout,
  HomePage, 
  RestaurantsPage,
  RestaurantDetailsPage,
  MenuPage,
  AboutPage,
  ContactPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
};

const renderRoutes = (routesArray) =>
  routesArray.map((route, index) => {
    const Page = pageComponents[route.element];

    // Check if there are nested children
    if (route.children) {
      const element =
        route.element === 'ProtectedRoute' ? (
          <Page allowedRoles={route.roles} />
        ) : (
          <Page />
        );
      return (
        <Route key={index} path={route.path} element={element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    // Public or leaf route
    // const element =
    //   route.element === 'ProtectedRoute' ? (
    //     <Page allowedRoles={route.roles} />
    //   ) : (
    //     <Page />
    //   );
    const element = <Page/>
    return <Route key={index} path={route.path} element={element} />;
  });

const AppRoutes = () => <Routes>{renderRoutes(routes)}</Routes>;

export default AppRoutes;





