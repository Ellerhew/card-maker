import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Login from "./login/login";
import styles from "./loginbox.module.css";

const Loginbox = (props) => (
	<section className={styles.loginbox}>
		<Header />
		<Login />
		<Footer />
	</section>
);

export default Loginbox;
