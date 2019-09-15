import React from 'react';
import style from './footer.module.css';

const Footer = () => {
	return (
		<div className={style.footer}>
			<div>
				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akhilkashyap05@gmail.com"
					target="_blank>"
					className={style.email}>
					<i className="fa fa-envelope" aria-hidden="true" /> akhilkashyap05@gmail.com
				</a>
			</div>

			<div>
				<a href="https://github.com/Akhil-Kashyap" target="_blank" rel="noopener noreferrer" className={style.github}>
					<i className="fa fa-github" aria-hidden="true" /> Github{' '}
				</a>
			</div>

			<div>
				<a
					href="https://www.linkedin.com/in/akhil-kashyap/"
					target="_blank"
					rel="noopener noreferrer"
					className={style.linkedin}>
					<i className="fa fa-linkedin" aria-hidden="true" /> LinkedIN{' '}
				</a>
			</div>

			<div>
				<a href="https://developer.edamam.com/" target="_blank" rel="noopener noreferrer" className={style.api}>
					<i className="fa fa-cog" aria-hidden="true" /> Developer API{' '}
				</a>
			</div>
		</div>
	);
};

export default Footer;
