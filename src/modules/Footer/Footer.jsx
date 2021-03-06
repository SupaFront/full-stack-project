import { NavLink } from 'react-router-dom';

import GetSvg from '../../shared/components/GetSvg';

import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={ styles.footerSection }>
			<div className={ styles.common }>
				<div className={ styles.container }>
					<GetSvg name="copyright" width={ 18 } height={ 18 } className="copyright" />
					<span>2022</span>
				</div>
				<div className={ styles.container }>
					<span>All Rights Reserved</span>
				</div>
				<div className={ styles.container }>
					<span>Developed with</span>
					<GetSvg name="heart" width={ 16 } height={ 16 } className="heart" />
				</div>
			</div>
			<div className={ styles.teamContainer }>
				by &nbsp;
				<NavLink to="/about-us" className={ styles.teamLink }>
					GoIT Students
				</NavLink>
			</div>
		</footer>
	);
}

export default Footer;
