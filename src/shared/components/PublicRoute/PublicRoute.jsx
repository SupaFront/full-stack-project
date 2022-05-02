import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PublicRoute = () => {
  const isLogggedIn = useAuth();

  if (isLogggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
