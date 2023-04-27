import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import UserMenu from 'components/userMenu/UserMenu';
import AuthMenu from 'components/authMenu/AuthMenu';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.nav}>
      <NavLink to={'/'} className={css.nav__home}>
        Home
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </div>
  );
};

export default Navigation;
