import { Outlet } from "react-router-dom";
import Breadcrumb from "../../../components/ui/Breadcrumb/Breadcrumb";
import RestaurantCard from "../../../components/ui/Card/RestaurantCard.jsx";



const RestaurantPage = () => {
  return (
    <>
      <div>
        <Breadcrumb />
      </div>

     
      <Outlet />
    </>
  );
};

export default RestaurantPage;
