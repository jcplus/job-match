import React from 'react';
import modalStyles from '../styles/modal.module.css';
import styles from '../styles/applyJob.module.css';

interface ApplyJobProps {
	isVisible: boolean;
	jobId: number | null;
	setIsVisible: (visible: boolean) => void;
}

const ApplyJob: React.FC<ApplyJobProps> = ({ isVisible, jobId , setIsVisible}) => {
	if (!isVisible) {
		return null;
	}

	return (
		<div className={modalStyles.modal}>
			<div className={`u-flex u-flex-column ${modalStyles.modalWrapper}`}>
				<div className={modalStyles.modalHead}>
					<span className="u-text-bold">Apply for this job (ID: {jobId})</span>
				</div>
				<div className={modalStyles.modalContent}>
          <span>
            Thanks for applying this job. We will be working on connecting you and the employer and
            let you know the result later.
          </span>
				</div>
				<div className={modalStyles.modalFoot}>
					<div className={`u-flex u-align-center u-justify-between u-full-width`}>
						<a
							className={`u-flex u-align-center u-justify-center u-cursor-link ${modalStyles.modalAction} ${modalStyles._cancel}`}
							onClick={() => setIsVisible(false)}
						>Cancel</a>
						<a
							className={`u-flex u-align-center u-justify-center u-cursor-link u-text-bold ${modalStyles.modalAction} ${modalStyles._submit}`}
							onClick={() => {
								// Add your submit logic here
							}}
						>Submit</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyJob;
