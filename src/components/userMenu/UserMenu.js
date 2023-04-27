import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.div}>
      <p className={css.mail}>{user.email}</p>
      <button className={css.btn} onClick={onLogout}>
        Logout
      </button>
      <NavLink className={css.contacts} to={'/contacts'}>
        Contacts
      </NavLink>
    </div>
  );
};

export default UserMenu;
