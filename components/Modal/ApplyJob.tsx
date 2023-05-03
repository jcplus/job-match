import React, {useState} from 'react';
import {useUserContext} from '../../context/UserContext';
import Modal from '../Modal';
import LoadingCircle from '../LoadingCircle';
import {applyJob} from '../../api/jobs';
import styles from '../../styles/applyJob.module.css';

interface ApplyJobProps {
	isVisible: boolean;
	jobId: number | null;
	setIsVisible: (visible: boolean) => void;
	onApplySuccess?: (jobId: number) => void;
}

const ApplyJob: React.FC<ApplyJobProps> = ({isVisible, jobId, setIsVisible, onApplySuccess}) => {
	const {user} = useUserContext();
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleSubmission = async () => {
		if (!user) return;

		setSubmitting(true);
		setSuccess(false);
		setMessage(null);

		const response = await applyJob(user.id, jobId as number);
		setMessage(response.message);
		if (response.success) {
			onApplySuccess && onApplySuccess(jobId as number);
			setSuccess(true);
		}
		setSubmitting(false);
	};

	const footerContent = (
		<div className={`u-flex u-align-center u-justify-between u-full-width`}>
			<div className="u-flex u-align-center u-justify-end u-flex-grow modalActionLeft">
				<a className="u-flex u-align-center u-justify-center u-cursor-link modalAction _cancel"
				   onClick={() => setIsVisible(false)}
				>{success ? 'Close' : 'Cancel'}</a>
			</div>
			{!success ?
				(
					<div className="u-flex u-align-center u-justify-end u-full-width modalActionRight">
						<a className="u-flex u-align-center u-justify-center u-cursor-link u-text-bold modalAction _submit"
						   onClick={handleSubmission}
						>Submit</a>
					</div>
				) : null}
		</div>
	);

	return (
		<Modal
			isVisible={isVisible}
			setIsVisible={setIsVisible}
			title={`Apply for job (ID: ${jobId})`}
			contentChildren={
				submitting ? (
					<div>
						<LoadingCircle strokeColor="rgba(0,0,0,.5)" message="Please wait..."/>
					</div>
				) : (
					message ? (
						<div>{message}</div>
					) : (
						<div>
							Thanks for applying this job. We will be working on connecting you and the employer and
							let you know the result later.
						</div>
					)
				)
			}
			footerChildren={submitting ? null : footerContent}
			clickElsewhereToClose={false}
		/>
	);
};

export default ApplyJob;