import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Route, Routes } from 'react-router';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import Home from './home/Home';
import Register from './register/Register';
import Login from './login/Login';
import UserContacts from './userContacts/UserContacts';

export const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());

    if (isLoggedIn === true) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>error</h3>;
  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<UserContacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
