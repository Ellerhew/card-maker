import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
	return (
		<div className={styles.login}>
			<span className={styles.login_span}>Login</span>
			<button className={styles.loginBtn}>Google</button>
			<button className={styles.loginBtn}>Github</button>
		</div>
	);
};

export default Login;
