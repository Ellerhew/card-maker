import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
	<div className={styles.header}>
		<img className={styles.logo} src="./images/logo.png" />
		<span className={styles.title}>Business Card Maker</span>
	</div>
);

export default Header;
