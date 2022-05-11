import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PublicRoute = () => {
  const isLoggedIn = useAuth();
  
  isLoggedIn = true;//only for tests

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
