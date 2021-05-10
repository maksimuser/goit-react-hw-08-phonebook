import { connect } from 'react-redux';
import { getUserEmail, logout } from '../../redux/auth';

import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.UserMenu}>
    <span className={styles.email}>Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
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
