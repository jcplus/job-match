import React, { ReactNode } from 'react';
import Link from 'next/link';
import { defaultTitle } from '../config';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title }: Props) => {
	const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

	return (
		<div className="u-flex u-flex-column layout">
			<Head>
				<title>{pageTitle}</title>
				<body className="u-scrollbar" />
			</Head>
			<Header />
			<main className="u-flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;