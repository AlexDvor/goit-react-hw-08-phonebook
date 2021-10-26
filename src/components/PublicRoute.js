import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/Auth/Auth-selector';

export default function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirected = isLoggedIn && restricted;
  console.log(shouldRedirected);
  return <Route {...routeProps}>{shouldRedirected ? <Redirect to="/contacts" /> : children}</Route>;
}
