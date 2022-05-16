import { NavLink } from 'react-router-dom';

import useAuth from '../../../shared/hooks/useAuth';

import styles from './Navigation.module.css';

function Navigation({ className, onClick }) {
	const isLogggedIn = useAuth();

	return (
		<div className={ className }>
			<ul className={ styles.list }>
				{ isLogggedIn && (
					<>
						<li className={ styles.item }>
							<NavLink
								to="/"
								className={ ({ isActive }) => (isActive ? styles.isActive : styles.navLink) }
								onClick={ onClick }
							>
								<span>Home</span>
							</NavLink>
						</li>
						<li className={ styles.item }>
							<NavLink
								to="/materials"
								className={ ({ isActive }) => (isActive ? styles.isActive : styles.navLink) }
								onClick={ onClick }
							>
								<span>Materials</span>
							</NavLink>
						</li>
					</>
				) }
				<li className={ styles.item }>
					<NavLink
						to="/about-us"
						className={ ({ isActive }) => (isActive ? styles.isActive : styles.navLink) }
						onClick={ onClick }
					>
						<span>About Us</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
