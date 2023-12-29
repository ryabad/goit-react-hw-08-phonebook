import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'store/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
