import React, { useState } from 'react';
import styles from '../styles/advanced-search.module.css';

interface Occupation {
	label: string;
	selected: boolean;
}

const AdvancedSearch: React.FC = () => {
	const [occupations, setOccupations] = useState<Occupation[]>([
		{
			label: 'CTO/VPoE/Tech Lead',
			selected: false
		},
		{
			label: 'Project Manager',
			selected: false
		},
		{
			label: 'Project Leader',
			selected: false
		},
		{
			label: 'Web Designer/Director',
			selected: false
		},
		{
			label: 'Infrastructure Engineer/SRE',
			selected: false
		},
		{
			label: 'Frontend Engineer',
			selected: false
		},
		{
			label: 'Backend Engineer',
			selected: false
		},
		{
			label: 'iOS Engineer',
			selected: false
		},
		{
			label: 'Android Engineer',
			selected: false
		},
		{
			label: 'Game Programmer/Game Engine Programmer',
			selected: false
		},
		{
			label: 'QA/Test Engineer',
			selected: true
		}
	]);

	const handleOccupationClick = (index: number) => {
		const newOccupations = [...occupations];
		newOccupations[index].selected = !newOccupations[index].selected;
		setOccupations(newOccupations);
	};

	return (
		<div className={styles.advancedSearch}>
			<div className="u-container">
				<h1 className={styles.advancedSearchPageTitle}>Advanced Search</h1>
				<div>
					<h2 className={styles.advancedSearchFilterHeading}>Occupation</h2>
					<div className={`u-flex u-align-center u-flex-wrap u-cursor-link ${styles.occupationFilters}`}>
						{occupations.map((occupation, index) => (
							<div
								key={occupation.label}
								className={`u-flex u-align-center ${styles.occupationFilter} ${
									occupation.selected ? '_selected' : ''
								}`}
								onClick={() => handleOccupationClick(index)}
							>
								<span className="u-checkbox"></span>
								<span className={styles.occupationFilterLabel}>{occupation.label}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvancedSearch;