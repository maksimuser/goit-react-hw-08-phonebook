import { connect } from 'react-redux';
import { getUserEmail, logout } from '../../redux/auth';

const UserMenu = ({ email, onLogout }) => (
  <div>
    <h2>User Menu</h2>
    <span>Добро пожаловать, {email}</span>
    <button type="button" onClick={onLogout}>
      Выйти
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
