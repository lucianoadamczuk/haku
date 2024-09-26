import Title from '../../components/Title/Title';
import styles from './NavbarClient.module.css';

export default function NavbarClient() {
	return (
		<nav className={styles.navbarClient}>
			<select name='' id=''>
				<option value=''>ES</option>
				<option value=''>EN</option>
			</select>
			<Title tag='span' text='texto' />
			<p>icon</p>
		</nav>
	);
}
