import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {getJobById} from '../../api/jobs';
import ApplyJob from '../../components/Modal/ApplyJob';
import Layout from '../../components/Layout';
import LoadingCircle from '../../components/LoadingCircle';
import LoginOrSignUp from '../../components/Modal/LoginOrSignUp';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {setJob} from '../../redux/actions/job';

import styles from '../../styles/jobs.module.css';

const JobDetailPage: React.FC = () => {
	const router = useRouter();
	const {id} = router.query;
	const dispatch = useDispatch();
	const job = useSelector((state: RootState) => state.job.job);
	const user = useSelector((state: RootState) => state.user.user);

	const [isLoading, setIsLoading] = useState(true);
	const [applyJobVisible, setApplyJobVisible] = useState(false);

	const jobsPage = useSelector((state: RootState) => state.jobs.jobsPage);

	useEffect(() => {
		if (id) {
			getJobById(Number(id))
				.then((jobData) => {
					dispatch(setJob(jobData));
					setIsLoading(false);
				})
				.catch((error) => {
					console.error('Error fetching job data:', error);
					setIsLoading(false);
				});
		}
	}, [id, dispatch]);
	useEffect(() => {
		console.log("JobsPage in [id].tsx:", jobsPage);
	}, [jobsPage]);

	const handleApplySuccess = (jobId: number) => {
		if (job.id === jobId) {
			dispatch(setJob({...job, applied: true}));
		}
	};

	if (isLoading) {
		return <LoadingCircle/>;
	}

	if (!job) {
		return <div>Job not found.</div>;
	}

	return (
		<Layout title="Job Details">
			<div
				className={`u-flex u-flex-column u-container ${styles.jobsContainer} ${styles.jobDetailContainer}`}>
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
				<div
					className={`u-full-width u-flex u-align-stretch u-justify-between ${styles.jobItemActions}`}
				>
					<Link
						href={jobsPage && jobsPage > 1 ? `/jobs?page=${jobsPage}` : '/jobs'}
						className={`${!job.applied ? 'u-cursor-link' : styles._applied} u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._details}`}
					>Back</Link>
					<a
						className={`${!job.applied ? 'u-cursor-link' : styles._applied} u-flex u-align-center u-justify-center ${styles.jobItemAction} ${styles._apply}`}
						onClick={() => {
							if (!job.applied) {
								setApplyJobVisible(true);
							}
						}}
					>
						{job.applied ? 'Applied' : 'Apply'}
					</a>
				</div>
				{user ? (
					<ApplyJob
						isVisible={applyJobVisible}
						jobId={job.id}
						setIsVisible={setApplyJobVisible}
						onApplySuccess={handleApplySuccess}
					/>
				) : (
					<LoginOrSignUp isVisible={applyJobVisible} setIsVisible={setApplyJobVisible}/>
				)}
			</div>
		</Layout>
	);
};

export default JobDetailPage;