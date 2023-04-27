import React from 'react';
import {defaultTitle} from '../config';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={`u-flex u-flex-column u-align-stretch ${styles.footer}`}>
			<div className="u-flex u-flex-column u-align-stretch u-container">
				<div className={`u-flex u-align-center u-justify-center ${styles.footerQuickLinks}`}>
					<a href="/privacy-policy" className={styles.footerQuickLink}>Privacy Policy</a>
					<a href="/terms-of-service" className={styles.footerQuickLink}>Terms of Service</a>
					<a href="/faq" className={styles.footerQuickLink}>FAQ</a>
					<a href="/about-us" className={styles.footerQuickLink}>About Us</a>
					<a href="/inquiry" className={styles.footerQuickLink}>Inquiry</a>
				</div>
			</div>
			<div className={`u-text-center ${styles.footerCopyright}`}>
				&copy; {currentYear} {defaultTitle}. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;