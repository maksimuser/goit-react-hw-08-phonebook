import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to={routes.home}>Home </NavLink>
    {isAuthenticated && <NavLink to={routes.contacts}>Contacts </NavLink>}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
