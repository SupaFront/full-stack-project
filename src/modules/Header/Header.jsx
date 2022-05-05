import { useState } from 'react';
import Hamburger from 'hamburger-react';

import useAuth from '../../shared/hooks/useAuth';

import Logo from './Logo';
import Navigation from './Navigation';
import Modal from '../../shared/components/Modal';
import GetSvg from '../../shared/components/GetSvg';

import styles from './Header.module.css';

function Header() {
  const isLoggedIn = useAuth();
  const [isOpen, setOpen] = useState(false);

  const renderLogoutButton = className => (
    <button type="button" className={className}>
      <GetSvg name="logout" width={16} height={16} className={styles.logoutSvg} />
    </button>
  );

  return (
    <header className={styles.headerSection}>
      <Logo />
      <Navigation className={styles.full} />
      <div className={styles.rightContainer}>
        {!isOpen && isLoggedIn && (
          <>
            <div className={styles.avatar}>K</div>
            <span className={styles.username}>Dmitri</span>
          </>
        )}
        {isLoggedIn && (
          <div className={styles.logoutContainer}>{renderLogoutButton(styles.logoutButton)}</div>
        )}
        <div className={styles.hamburgerContainer}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={12}
            color="#000000"
            hideOutline={true}
          />
        </div>
      </div>
      {isOpen && (
        <Modal onClose={() => setOpen(false)}>
          <Navigation className={styles.mobile} />
          {isLoggedIn && renderLogoutButton(styles.logoutModalButton)}
        </Modal>
      )}
    </header>
  );
}

export default Header;
