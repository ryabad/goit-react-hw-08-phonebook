import { NavLink } from 'react-router-dom';
import css from './GuestMenu.module.css';

const GuestMenu = () => {
  return (
    <nav>
      <ul className={css.listGuest}>
        <li className={css.list}>
          <NavLink className={css.item} aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className={css.list}>
          <NavLink className={css.item} to="/login">
            Authorization
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GuestMenu;
