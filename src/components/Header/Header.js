import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsAuth } from 'store/auth/selectors';

import GuestMenu from 'components/GuestMenu/GuestMenu';
import {
  BackgroundGuest,
  BackgroundUser,
} from 'components/Background/Background';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? (
    <BackgroundUser>
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BackgroundUser>
  ) : (
    <BackgroundGuest>
      <GuestMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BackgroundGuest>
  );
};
