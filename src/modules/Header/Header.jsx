import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

import useAuth from '../../shared/hooks/useAuth';
import { logOutUser } from "../../redux/auth/auth-operations";

import Logo from './Logo';
import Navigation from './Navigation';
import UserInfo from "./UserInfo";
import Modal from '../../shared/components/Modal';
import GetSvg from '../../shared/components/GetSvg';
import styles from './Header.module.css';

function Header() {
	const dispatch = useDispatch();
	const isLoggedIn = useAuth();
	const [ isOpen, setOpen ] = useState(false);

	const onHandleClick = () => {
		dispatch(logOutUser());
	};

	const renderLogoutButton = className => (
		<button type="button" className={ className } onClick={ onHandleClick }>
			<GetSvg name="logout" width={ 16 } height={ 16 } className={ styles.logoutSvg } />
		</button>
	);

	return (
		<header className={ styles.headerSection }>
			<Logo />
			<Navigation className={ styles.full } />
			<div className={ styles.rightContainer }>
				{ !isOpen && isLoggedIn && <UserInfo /> }
				{ isLoggedIn && (
					<div className={ styles.logoutContainer }>{
						renderLogoutButton(styles.logoutButton)
					}</div>
				) }
				<div className={ styles.hamburgerContainer }>
					<Hamburger
						toggled={ isOpen }
						toggle={ setOpen }
						size={ 12 }
						color="#000000"
						hideOutline={ true }
					/>
				</div>
			</div>
			{ isOpen && (
				<Modal onClose={ () => setOpen(false) }>
					<Navigation className={ styles.mobile } />
					{ isLoggedIn && renderLogoutButton(styles.logoutModalButton) }
				</Modal>
			) }
		</header>
	);
}

export default Header;
