import { Link } from "react-router-dom";



const RestaurantDetails = ({restorent}) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm mt-5">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{restorent.name}</h2>
        <p>Click the button to watch on Jetflix app.</p>

        <div className=" h-[100%] flex gap-5">
         

         
          <div className="card-actions   pt-2">
            <Link to={`/restaurants/about/${restorent.id}`} className="btn btn-primary">
              about
            </Link>
          </div>
          <div className="card-actions  pt-2">
            <Link to={`/restaurants/menu/${restorent.id}`} className="btn btn-primary">
              menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
