import { useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';
import { loginThunk } from 'store/auth/authService';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = body => {
    dispatch(loginThunk(body));
  };
  return <LoginForm login={login} />;
};

export default LoginPage;
