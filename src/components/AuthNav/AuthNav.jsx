import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => (
  <nav>
    <NavLink to={routes.login}>Login </NavLink>
    <NavLink to={routes.register}>Register </NavLink>
  </nav>
);

export default AuthNav;
