import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={`u-full-height u-flex u-align-stretch u-justify-between ${styles.headerWrapper}`}>
				<a href="/" className={`u-flex u-align-center u-cursor-link ${styles.headerLogo}`}>
					<img className="u-display-block" src="/images/logo.png" alt="Logo" />
				</a>
				<div className={`u-flex u-align-center u-justify-end ${styles.headerMain}`}>
					<nav className={`u-full-height u-flex u-align-center ${styles.headerNav}`}>
						<div className={styles.headerUserWrapper}>
							<a className={`u-flex u-align-center u-justify-center u-cursor-link ${styles.headerUserToggle}`}>
								<FontAwesomeIcon icon={faUser} className={styles.headerNavUserIcon} />
							</a>
							<div className={`u-flex u-flex-column u-align-stretch ${styles.headerUserDropdown}`}>
								<a className={`u-flex u-align-center u-cursor-link ${styles.headerUserDropdownItem}`}>
									<span className={styles.headerUserDropdownItemLabel}>Login</span>
								</a>
								<a className={`u-flex u-align-center u-cursor-link ${styles.headerUserDropdownItem}`}>
									<span className={styles.headerUserDropdownItemLabel}>Create new account</span>
								</a>
							</div>
						</div>
						<a href="/employer-portal" className={`u-text-bold u-cursor-link ${styles.headerNavMenuItemLink}`}>Employer Portal</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
