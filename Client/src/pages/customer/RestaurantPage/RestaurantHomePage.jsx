import React from 'react'
import RestaurantCard from '../../../components/ui/Card/RestaurantCard'


const RestaurantHomePage = () => {

const restorents = [
  { id: 1, name: "Chocolate Cake" },
  { id: 2, name: "Pizza Margherita" },
];

  return (
  
        <div className=" flex flex-col  items-center">
          {/* <h3>{product.name}</h3>
              <Link
                to={`/restaurants/${product.id}`}
                className="btn btn-primary"
              >
                Details
              </Link> */}

          <div className="w-[80%] my-20">
            {restorents.map((restorent) => (
              <RestaurantCard key={restorent.id} restorent={restorent} />
            ))}
          </div>
        </div>

  )
}

export default RestaurantHomePage