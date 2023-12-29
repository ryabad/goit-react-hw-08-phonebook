import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'store/auth/authService';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const register = body => {
    dispatch(registrationThunk(body));
  };
  return <RegistrationForm register={register} />;
};

export default RegistrationPage;
