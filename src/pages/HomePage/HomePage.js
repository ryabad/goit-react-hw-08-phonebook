import { useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from 'store/auth/selectors';
import css from './HomePage.module.css';

const HomePage = () => {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  return isAuth ? (
    <h1 className={`${css.title} ${css.titleUser}`}>Welcome {user.name}</h1>
  ) : (
    <h1 className={css.title}>Welcome Guest!</h1>
  );
};

export default HomePage;
