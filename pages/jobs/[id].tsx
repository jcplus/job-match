import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { JobProvider, Job } from '../../context/JobContext';
import { getJobById } from '../../api/jobs';
import Layout from '../../components/Layout';
import LoadingCircle from '../../components/LoadingCircle';
import styles from '../../styles/jobs.module.css';

const JobDetailPage: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const [job, setJob] = useState<Job | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (id) {
			getJobById(Number(id))
				.then((jobData) => {
					setJob(jobData);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching job data:', error);
					setIsLoading(false);
				});
		}
	}, [id]);

	if (isLoading) {
		return <LoadingCircle />;
	}

	if (!job) {
		return <div>Job not found.</div>;
	}

	return (
		<JobProvider>
			<Layout title="Job Details">
				<div className={`u-flex u-flex-column u-container ${styles.jobsContainer} ${styles.jobDetailContainer}`}>
					<h1 className={styles.jobDetailHeading}>
						<span>{job.job_title}</span>
					</h1>
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
						<a className={`${!job.applied ? 'u-cursor-link' : styles._applied} u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._apply}`}
						>{job.applied ? 'Applied' : 'Apply'}</a>
					</div>
				</div>
			</Layout>
		</JobProvider>
	);
};

export default JobDetailPage;