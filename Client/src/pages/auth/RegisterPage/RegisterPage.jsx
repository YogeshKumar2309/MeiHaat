import { useForm } from "react-hook-form";
import { useSignUpMutation } from "../../../api/rtk/authApi";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUp, { isLoading, error, isSuccess }] = useSignUpMutation();

  const onSubmit = async (formData) => {
    try {
      // signUp ko await karo aur unwrap() use karo
      const response = await signUp(formData).unwrap();

      if (response.success) {
        toast.success("User registered successfully!");

        //user data save in store
        dispatch(
          setUser({
            user: response.user,
            token: response.token,
                      })
        );
        

          // Redirect to profile or home
        navigate("/", { replace: true });
      } else {
        toast.error(response.message || "Registration failed");
      }
    } catch (err) {
      toast.error(err.data?.message || err.message || "Registration failed");
    }
  };
 
 

  return (
    <>

      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email regex
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="border p-2 rounded w-full text-gray-700"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
              placeholder="Password"
              className="border p-2 rounded w-full text-gray-700"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <p className="font-medium mb-2 text-gray-800">Select Role:</p>
            <label className="mr-4 text-gray-700">
              <input
                type="radio"
                value="customer"
                {...register("roles", { required: "Role is required" })}
                className="mr-1"
              />
              Buyer
            </label>
            <label className="mr-4 text-gray-700">
              <input
                type="radio"
                value="shopKeeper"
                {...register("roles", { required: "Role is required" })}
                className="mr-1"
              />
              Seller
            </label>
            <label className="text-gray-700">
              <input
                type="radio"
                value="delivery"
                {...register("roles", { required: "Role is required" })}
                className="mr-1"
              />
              Delivery
            </label>
            {errors.roles && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roles.message}
              </p>
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full mt-4 cursor-pointer"
            value="Register"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
