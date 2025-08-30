import { NavLink } from "react-router-dom";
import routes from "../../../utils/constants/routes.js";
import { useState } from "react";
import { useGetMeQuery, useLogoutMutation } from "../../../api/rtk/authApi.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logoutUser } from "../../../store/slices/authSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const [logout ] = useLogoutMutation();

  const { data, isLoading, isError } = useGetMeQuery();
  const [location, setLocation] = useState("");

   // Redux state से authentication read करें
  const { user, isLoggedIn } = useSelector((state) => state.auth);


  //only PubliclayoutComponent
  const publicRoutes =
    routes.find((r) => r.element === "PublicLayout")?.children || [];

  // whic component shows in navbar
  const navLinks = publicRoutes.filter(
    (route) =>
      !route.path.startsWith("auth") &&
      !route.path.startsWith("/") &&
      !route.path.startsWith("customer") &&
      !route.path.includes(":") // dynamic params (restaurant/:id)  ignore
  );

  const handleLogout = async () => {
    try {
      await logout().unwrap();//backend call
      dispatch(logoutUser());//redux state clear
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading user data</div>;
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for location: ${location}`);
  };

  return (
    <>
      <div className="navbar shadow-sm flex flex-col md:flex-row items-center justify-between px-4 *bg-base-100* ">
        <div className="">
          {/* Logo Section */}
          <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
            <NavLink
              to={`/`}
              className={`btn btn-ghost text-xl 
              }`}
            >
              MàiHaat
            </NavLink>
          </div>
        </div>

        {/* Location Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={handleLocationChange}
            className="input input-bordered input-sm w-60 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {/* Search Section */}
          <div className="w-96">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs md:max-w-md"
            />
          </div>{" "}
          <button className="btn btn-primary btn-sm" onClick={handleSearch}>
            Search
          </button>
        </div>

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

        {isLoggedIn ? (
          <div className="flex items-center gap-2 pr-10">
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                  >Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-none pr-5">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={`/auth/login`}>Log in</NavLink>
              </li>
              <li>
                <NavLink to={`/auth/register`}>Sing up</NavLink>
              </li>

              {/* impliment inside login */}
              {false && (
                <li>
                  <NavLink to={`/auth/forgot-password`}>Forget Pass</NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
