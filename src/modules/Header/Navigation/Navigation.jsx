import { NavLink } from "react-router-dom";

import useAuth from "../../../shared/hooks/useAuth";

import styles from "./Navigation.module.css";

function Navigation({ className }) {
	const isLogggedIn = useAuth();

	return (
		<div className={ className }>
			<ul className={ styles.list }>
				{ isLogggedIn && (
					<>
						<li className={ styles.item }>
							<NavLink
								to="/1"
								className={ ({ isActive }) => isActive ? styles.isActive : styles.navLink }
							>
								<span>
									Home
								</span>
							</NavLink>
						</li>
						<li className={ styles.item }>
							<NavLink
								to="/2"
								className={ ({ isActive }) => isActive ? styles.isActive : styles.navLink }
							>
								<span>
									Materials
								</span>
							</NavLink>
						</li>
					</>
				) }
				<li className={ styles.item }>
					<NavLink
						to="/3"
						className={ ({ isActive }) => isActive ? styles.isActive : styles.navLink }
					>
						<span>
							Contacts
						</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;