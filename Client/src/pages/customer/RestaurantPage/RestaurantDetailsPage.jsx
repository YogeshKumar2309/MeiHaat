import { useParams } from "react-router-dom";
import RestaurantDetails from "../../../components/features/customer/RestaurantCard/RestaurantDetails";

const restaurants = [
  {
    id: 1,
    name: "Chocolate Cake",
    desc: "Soft and creamy chocolate cake topped with rich chocolate ganache.",
    location: "Bangalore",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Pizza Margherita",
    desc: "Classic Italian pizza with fresh tomatoes, mozzarella & basil.",
    location: "Delhi",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Burger Delight",
    desc: "Juicy beef burger with cheese, lettuce & special sauce.",
    location: "Mumbai",
    rating: 4.7,
  },
];

const RestaurantDetailsPage = () => {
  const { id } = useParams(); // URL se id nikalna
  const restaurant = restaurants.find((r) => r.id === parseInt(id)); // array me se match karna

  if (!restaurant)
    return <h2 className="text-red-500">Restaurant not found</h2>;

  return (
    <div className="p-5 border rounded-lg bg-gray-100 w-[60%] mt-5 mx-auto shadow-md">
      <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
      <p className="text-gray-700 mb-2">{restaurant.desc}</p>
      <p className="text-sm text-gray-600">📍 {restaurant.location}</p>
      <p className="text-yellow-600">⭐ {restaurant.rating} / 5</p>

   
          
              <RestaurantDetails restorent={restaurant} />
     
    </div>
  );
};

export default RestaurantDetailsPage;
