import React, {useState} from 'react';
import Link from 'next/link';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {updateJob} from '../redux/actions/jobs';
import LoginOrSignUp from './Modal/LoginOrSignUp';
import ApplyJob from './Modal/ApplyJob';
import styles from '../styles/jobs.module.css';

interface BrowseJobProps {
	job: Job;
}

const BrowseJob: React.FC<BrowseJobProps> = ({job}) => {
	const modalAnimationDuration = 500;
	const user = useSelector((state: RootState) => state.user);
	const jobs = useSelector((state: RootState) => state.jobs);
	const dispatch = useDispatch();
	const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(false);
	const [isApplyJobVisible, setIsApplyJobVisible] = useState(false);
	const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

	const handleApplyClick = (jobId: number) => {
		setSelectedJobId(jobId);
		setIsApplyJobVisible(true);
	};

	const handleApplySuccess = (jobId: number) => {
		const updatedJob = jobs.find((j) => j.id === jobId);
		if (updatedJob) {
			dispatch(updateJob({...updatedJob, applied: true}));
		}
	};

	return (
		<>
			{showLoginOrSignUp && <LoginOrSignUp
				isVisible={showLoginOrSignUp}
				setIsVisible={setShowLoginOrSignUp}
			/>}
			{isApplyJobVisible && <ApplyJob
				isVisible={isApplyJobVisible}
				jobId={selectedJobId}
				setIsVisible={setIsApplyJobVisible}
				onApplySuccess={handleApplySuccess}
			/>}
			<div className={`u-flex u-flex-column u-align-start ${styles.jobItem}`}>
				<Link href={`/jobs/${job.id}`}>
					<h2 className={`u-flex u-align-center ${styles.jobItemTitle}`}>
						<span className={styles.jobItemTitleLabel}>{job.job_title}</span>
					</h2>
				</Link>
				<div className={`u-flex u-align-base ${styles.jobItemHeading}`}>
					<div className={`u-flex u-align-base ${styles.jobItemRate}`}>
						<span className={styles.jobItemPayRate}>${job.pay_rate}</span>
						<span className={styles.jobItemPaySpacer}>/</span>
						<span className={styles.jobItemPayUnit}>{job.pay_unit}</span>
					</div>
					<div className={`u-flex u-align-center ${styles.jobItemLocation}`}>{job.location}</div>
					<div className={`u-flex u-align-center ${styles.jobItemWorkType}`}>{job.work_type}</div>
				</div>
				<div className={`u-full-width u-flex u-flex-column u-align-stretch ${styles.jobItemTable}`}>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Category</div>
						<div className={styles.jobItemRowValue}>{job.job_category}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Description</div>
						<div className={styles.jobItemRowValue}>{job.job_description}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Skills Required</div>
						<div className={styles.jobItemRowValue}>{job.required_skills}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Wow Factors</div>
						<div className={styles.jobItemRowValue}>{job.preferred_skills}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Contact Type</div>
						<div className={styles.jobItemRowValue}>{job.contract_type}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Contactor</div>
						<div className={styles.jobItemRowValue}>{job.contractor}</div>
					</div>
					<div className={`u-flex u-align-stretch ${styles.jobItemRow}`}>
						<div className={styles.jobItemRowName}>Extra</div>
						<div className={styles.jobItemRowValue}>{job.additional_info}</div>
					</div>
				</div>
				<div className={`u-full-width u-flex u-align-stretch u-justify-center ${styles.jobItemActions}`}>
					<Link
						href={`/jobs/${job.id}`}
						className={`u-cursor-link u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._details}`}
					>More Details</Link>
					{
						job.applied ? (
							<a className={`u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._applied}`}>Applied</a>
						) : (
							<a className={`u-cursor-link u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._apply}`}
							   onClick={() => handleApplyClick(job.id)}
							>Apply</a>
						)
					}
				</div>
			</div>
		</>
	);
};

export default BrowseJob;