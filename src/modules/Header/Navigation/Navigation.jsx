import { NavLink } from 'react-router-dom';

import useAuth from '../../../shared/hooks/useAuth';

import styles from './Navigation.module.css';

function Navigation({ className }) {
  const isLogggedIn = useAuth();

  return (
    <div className={className}>
      <ul className={styles.list}>
        {isLogggedIn && (
          <>
            <li className={styles.item}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.isActive : styles.navLink)}
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/useful-info"
                className={({ isActive }) => (isActive ? styles.isActive : styles.navLink)}
              >
                <span>Materials</span>
              </NavLink>
            </li>
          </>
        )}
        <li className={styles.item}>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? styles.isActive : styles.navLink)}
          >
            <span>Contacts</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
