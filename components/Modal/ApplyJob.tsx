import React from 'react';
import Modal from '../Modal';
import styles from '../../styles/applyJob.module.css';

interface ApplyJobProps {
	isVisible: boolean;
	jobId: number | null;
	setIsVisible: (visible: boolean) => void;
}

const ApplyJob: React.FC<ApplyJobProps> = ({ isVisible, jobId, setIsVisible }) => {
	return (
		<Modal
			isVisible={isVisible}
			setIsVisible={setIsVisible}
			title={`Apply for this job (ID: ${jobId})`}
			actions={[
				{
					label: 'Submit',
					className: `u-text-bold ${styles.actionSubmit}`, // or any custom class
					handle: () => {
						// Add your submit logic here
					},
				},
			]}
		>
			<div>
				Thanks for applying this job. We will be working on connecting you and the employer and let you
				know the result later.
			</div>
		</Modal>
	);
};

export default ApplyJob;