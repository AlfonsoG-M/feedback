import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLogged } = useSelector((store) => store.authSlice);

  if (!isLogged) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
