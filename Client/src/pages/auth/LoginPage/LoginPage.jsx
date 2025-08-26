import { Link, Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                to="/auth/forgot-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>

          {/* Signup redirect */}
          <p className="text-center text-sm mt-2">
            Don’t have an account?
            <Link to="/auth/register" className="text-primary ml-1">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default LoginPage;
