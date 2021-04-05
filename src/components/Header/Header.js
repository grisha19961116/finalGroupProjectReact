// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Navigation from '../Navigation';
import Burger from './Burger';
import routes from '../../routes';
// import { authSelectors } from '../../redux/auth/auth-selectors';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo to={routes.MAIN_VIEW} onOpenMobileMenu={setIsOpen} />
        <Navigation isOpen={isOpen} onOpenMobileMenu={setIsOpen} />
        <Burger isOpen={isOpen} onOpenMobileMenu={setIsOpen} />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </div>
    </header>
  );
}

export default Header;