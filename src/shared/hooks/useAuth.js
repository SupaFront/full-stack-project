import { useSelector, shallowEqual } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const useAuth = () => {
  const isLogin = useSelector(getIsLoggedIn, shallowEqual);

  return isLogin;
};

export default useAuth;
