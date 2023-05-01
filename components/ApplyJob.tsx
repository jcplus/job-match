import React from 'react';
import styles from '../styles/applyJob.module.css';

const ApplyJob: React.FC = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<h2>Apply for this job</h2>
				{/* Add your apply job form or content here */}
			</div>
		</div>
	);
};

export default ApplyJob;