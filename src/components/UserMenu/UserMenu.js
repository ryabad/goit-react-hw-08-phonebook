import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'store/auth/authService';
import { selectUser } from 'store/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const profile = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutThunk());
  };
  return (
    <nav className={css.navigation}>
      <h3 className={css.email}>{profile.email}</h3>
      <ul className={css.list}>
        <li>
          <NavLink className={css.item} aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.item} aria-current="page" to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li>
          <button className={css.button} onClick={handleClick}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default UserMenu;
