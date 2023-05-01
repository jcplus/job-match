import React, { useState } from 'react';
import Link from 'next/link';
import {Job} from '../context/JobContext';
import {useUserContext} from '../context/UserContext';
import LoginOrSignUp from './LoginOrSignUp';
import ApplyJob from './ApplyJob';
import styles from '../styles/jobs.module.css';

interface BrowseJobProps {
	job: Job;
}

interface BrowseJobProps {
	job: Job;
}

const BrowseJob: React.FC<BrowseJobProps> = ({job}) => {
	const { user } = useUserContext();
	const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(false);
	const [showApplyJob, setShowApplyJob] = useState(false);

	const handleApplyClick = () => {
		if (user) {
			setShowApplyJob(true);
		} else {
			setShowLoginOrSignUp(true);
		}
	};

	return (
		<>
			{showLoginOrSignUp && <LoginOrSignUp />}
			{showApplyJob && <ApplyJob />}
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
					<a className={`u-cursor-link u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._details}`}
					   href={`/jobs/${job.id}`}
					>More Details</a>
					<a
						className={`u-cursor-link u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._apply}`}
						onClick={handleApplyClick}
					>Apply</a>
				</div>
			</div>
		</>
	);
};

export default BrowseJob;