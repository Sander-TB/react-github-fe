import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<nav className={styles.appNavigation}>
			<NavLink exact to='/'>
				Home
			</NavLink>
			<NavLink to='/about'>About</NavLink>
		</nav>
	);
}
