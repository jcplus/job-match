import React, {useEffect} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

import {toggleOccupation, toggleTechStack, toggleWorkStyle} from '../redux/actions/filters';

import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {setFilters} from '../redux/actions/filters';
import {fetchFilters} from '../api/filters';

import styles from '../styles/advancedSearch.module.css';

const HomePage: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const occupations = useSelector((state: RootState) => state.filters.occupations);
	const techStacks = useSelector((state: RootState) => state.filters.techStacks);
	const workStyles = useSelector((state: RootState) => state.filters.workStyles);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchFilters();
			dispatch(setFilters(data));
		};

		void fetchData();
	}, [dispatch]);

	const handleOccupationClick = (index: number) => {
		dispatch(toggleOccupation(index));
	};

	const handleTechStackClick = (index: number) => {
		dispatch(toggleTechStack(index));
	};

	const handleWorkStyleClick = (index: number) => {
		dispatch(toggleWorkStyle(index));
	};

	const handleClearSelections = () => {
		occupations.forEach((occupation, index) => {
			if (occupation.selected) {
				dispatch(toggleOccupation(index)); // 使用 dispatch
			}
		});

		techStacks.forEach((techStack, index) => {
			if (techStack.selected) {
				dispatch(toggleTechStack(index)); // 使用 dispatch
			}
		});

		workStyles.forEach((workStyle, index) => {
			if (workStyle.selected) {
				dispatch(toggleWorkStyle(index)); // 使用 dispatch
			}
		});
	};

	return (
		<Layout title="Find your perfect job">
			<div className={styles.advancedSearch}>
				<div className="u-container">
					<h1 className={styles.pageTitle}>Advanced Search</h1>
					<div className={styles.filterWrapper}>
						<h2 className={styles.filterHeading}>Occupation</h2>
						<div className={`u-flex u-align-center u-flex-wrap ${styles.filters}`}>
							{occupations.map((occupation, index) => (
								<div
									key={occupation.label}
									className={`u-flex u-align-center u-cursor-link u-no-select ${styles.filter} ${
										occupation.selected ? styles._selected : ''
									}`}
									onClick={() => handleOccupationClick(index)}
								>
								<span className={`u-checkbox ${
									occupation.selected ? '_selected' : ''
								}`}></span>
									<span className={styles.filterLabel}>{occupation.label}</span>
								</div>
							))}
						</div>
					</div>
					<div className={styles.filterWrapper}>
						<h2 className={styles.filterHeading}>Tech Stack</h2>
						<div className={`u-flex u-align-center u-flex-wrap ${styles.filters}`}>
							{techStacks.map((techStack, index) => (
								<div
									key={techStack.label}
									className={`u-flex u-align-center u-cursor-link u-no-select ${styles.filter} ${
										techStack.selected ? styles._selected : ''
									}`}
									onClick={() => handleTechStackClick(index)}
								>
									<span className={`u-checkbox ${techStack.selected ? '_selected' : ''}`}></span>
									<span className={styles.filterLabel}>{techStack.label}</span>
								</div>
							))}
						</div>
					</div>
					<div className={styles.filterWrapper}>
						<h2 className={styles.filterHeading}>Work Locations</h2>
						<div className={`u-flex u-align-center u-flex-wrap ${styles.filters}`}>
							{workStyles.map((workStyle, index) => (
								<div
									key={workStyle.label}
									className={`u-flex u-align-center u-cursor-link u-no-select ${styles.filter} ${
										workStyle.selected ? styles._selected : ''
									}`}
									onClick={() => handleWorkStyleClick(index)}
								>
									<span className={`u-checkbox ${workStyle.selected ? '_selected' : ''}`}></span>
									<span className={styles.filterLabel}>{workStyle.label}</span>
								</div>
							))}
						</div>
					</div>
					<div className={`u-flex u-align-center u-justify-end ${styles.actions}`}>
						<button
							className={`u-flex u-align-center u-justify-center ${styles.action} ${styles.clearAction}`}
							onClick={handleClearSelections}
						>Clear
						</button>
						<Link
							href="jobs"
							className={`u-flex u-align-center u-justify-center ${styles.action} ${styles.submitAction}`}
						>Search</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HomePage;