import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PublicRoute = () => {
  const isLoggedIn = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
