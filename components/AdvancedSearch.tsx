import React, {useState} from 'react';
import { useOccupationContext } from '../context/OccupationContext';
import { useTechStackContext } from '../context/TechStackContext';
import { useWorkStyleContext } from '../context/WorkStyleContext';
import styles from '../styles/advanced-search.module.css';

const AdvancedSearch: React.FC = () => {
	const { occupations, setOccupations } = useOccupationContext();
	const { techStacks, setTechStacks } = useTechStackContext();
	const { workStyles, setWorkStyles } = useWorkStyleContext();

	const handleOccupationClick = (index: number) => {
		const newOccupations = [...occupations];
		newOccupations[index].selected = !newOccupations[index].selected;
		setOccupations(newOccupations);
	};

	const handleTechStackClick = (index: number) => {
		const newTechStacks = [...techStacks];
		newTechStacks[index].selected = !newTechStacks[index].selected;
		setTechStacks(newTechStacks);
	};

	const handleWorkStyleClick  = (index: number) => {
		const newWorkStyles = [...workStyles];
		newWorkStyles[index].selected = !newWorkStyles[index].selected;
		setWorkStyles(newWorkStyles);
	};

	return (
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
					<button className={`u-flex u-align-center u-justify-center ${styles.action} ${styles.clearAction}`}>Clear</button>
					<button className={`u-flex u-align-center u-justify-center ${styles.action} ${styles.submitAction}`}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default AdvancedSearch;