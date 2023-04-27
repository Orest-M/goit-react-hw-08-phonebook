import { NavLink } from 'react-router-dom';

import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.div}>
      <NavLink to={'/register'} className={css.item}>
        Register
      </NavLink>
      <NavLink to={'/login'} className={css.item}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;
