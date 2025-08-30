import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "./api/rtk/authApi";
import { useEffect } from "react";
import { setUser } from "./store/slices/authSlice";

const App = () => {

  const dispatch = useDispatch();
  const {data, isSuccess} = useGetMeQuery();

  useEffect(() => {
    if (isSuccess && data?.success){
      dispatch(setUser({
        user: data.user,
        token: data.token,
      }))
    }
  }, [isSuccess, data, dispatch]);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
     </>
  );
};

export default App;
