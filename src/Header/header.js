import React from 'react';
import style from './header.module.css';
import logo from './logo.png';

const header = () => {
	return (
		<div className={style.info}>
			<div className={style.title}>
				<img src={logo} className={style.img} alt="Bits and Bites Logo" />
				<h1 className={style.name}>Bits&Bites</h1>
			</div>
			<div className={style.tagline}>
				<p className={style.line}>0/1 : Byte :: Ingredients : Bite</p>
			</div>
		</div>
	);
};

export default header;
