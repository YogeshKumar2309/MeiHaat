import routes from '../../../../utils/constants/routes';
import Breadcrumb from '../../../ui/Breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';

const RestaurantHeader = () => {
   //only PubliclayoutComponent
 const publicRoutes =
  routes.find((r) => r.element === "PublicLayout")?.children || [];

  const restaurantRoutes =
  publicRoutes.find((r) => r.path === "restaurants")?.children || [];


  // whic component shows in navbar
  const navLinks = restaurantRoutes.filter(
    (route) =>
      // !route.path.startsWith("auth") &&
      // !route.path.startsWith("/") &&
      // !route.path.startsWith("customer") &&
      !route.path.includes(":") // dynamic params (restaurant/:id)  ignore
  );
  return (
    <nav>
      <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((route, index) => (
              <li key={index}>
                <NavLink to={`/${route.path}`}>
                  {route.element.replace("Page", "")}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


        
      <div>
        <Breadcrumb/>
      </div>
      



    </nav>
  )
}

export default RestaurantHeader


//  <section className=" h-[60vh]">
//         <div className="py-5 mx-5  mb-5 flex ">
//           <div className="pb-2 w-[50%]">
//             <RestaurantCard />
//           </div>
//           <div className="flex flex-wrap gap-4  w-[50%] h-[60vh] bg-cover overflow-y-auto justify-center">
//             <div>
//               <Food />
//             </div>
           
//           </div>
//         </div>
//       </section>