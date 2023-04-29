import React from 'react';
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

		if (totalPages <= 6) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 4) {
				for (let i = 1; i <= 3; i++) {
					pages.push(i);
				}
				pages.push('...');
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 3) {
				pages.push(1);
				pages.push('...');
				for (let i = totalPages - 2; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				pages.push(1);
				pages.push('...');
				pages.push(currentPage - 1);
				pages.push(currentPage);
				pages.push(currentPage + 1);
				pages.push('...');
				pages.push(totalPages);
			}
		}

		return pages.map((page, index) => (
			<li
				key={index}
				className={page === currentPage ? 'active' : ''}
				onClick={() => typeof page === 'number' && handlePageClick(page)}
			>
				{page}
			</li>
		));
	};

	return (
		<ul className={styles.pagination}>
			{showLeftArrow && (
				<li onClick={() => handlePageClick(currentPage - 1)}>
					<span>&laquo;</span>
				</li>
			)}
			{renderPageNumbers()}
			{showRightArrow && (
				<li onClick={() => handlePageClick(currentPage + 1)}>
					<span>&raquo;</span>
				</li>
			)}
		</ul>
	);
};

export default Pagination;