import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import styles from '../styles/pagination.module.css';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const showLeftArrow = currentPage > 1 && totalPages > 6;
	const showRightArrow = currentPage < totalPages && totalPages > 6;

	const handlePageClick = (page: number) => {
		if (page !== currentPage) {
			onPageChange(page);
		}
	};

	const renderPageNumbers = () => {
		const pages = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 4) {
				for (let i = 1; i <= currentPage + 1; i++) {
					pages.push(i);
				}
				pages.push('...');
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 3) {
				pages.push(1);
				pages.push('...');
				for (let i = currentPage - 1; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				pages.push(1);
				pages.push('...');
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pages.push(i);
				}
				pages.push('...');
				pages.push(totalPages);
			}
		}

		return pages.map((page, index) => (
			<li
				key={index}
				className={
					`u-flex u-align-center u-justify-center 
					${styles.paginationItem} 
					${page === currentPage ? styles._active : ''} 
					${page === '...' ? styles._spacer : ''}`
				}
				onClick={() => typeof page === 'number' && handlePageClick(page)}
			>
				{page}
			</li>
		));
	};

	return (
		<ul className={`u-flex u-align-stretch u-no-list-style ${styles.pagination}`}>
			{showLeftArrow && (
				<li className={`u-flex u-align-center u-justify-center u-cursor-link ${styles.paginationItem} ${styles.leftArrow}`}
					onClick={() => handlePageClick(currentPage - 1)}>
					<i className="fa fa-angle-left"></i>
				</li>
			)}
			{renderPageNumbers()}
			{showRightArrow && (
				<li className={`u-flex u-align-center u-justify-center u-cursor-link ${styles.paginationItem} ${styles.rightArrow}`}
					onClick={() => handlePageClick(currentPage + 1)}>
					<i className="fa fa-angle-right"></i>
				</li>
			)}
		</ul>
	);
};

export default Pagination;