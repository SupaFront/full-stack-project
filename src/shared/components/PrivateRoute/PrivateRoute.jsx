import { useLocation, Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
  const isLoggedIn = useAuth();

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
