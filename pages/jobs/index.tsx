import React, {useEffect, useState} from 'react';
import BrowseJob from '../../components/BrowseJob';
import Layout from '../../components/Layout';
import LoadingCircle from '../../components/LoadingCircle';
import Pagination from '../../components/Pagination';
import {JobProvider, useJobContext} from '../../context/JobContext';
import {UserProvider} from '../../context/UserContext';
import {getAllJobs} from '../../api/jobs';
import styles from '../../styles/jobs.module.css';

const JobsPage: React.FC = () => {
	const {jobs, setJobs} = useJobContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getAllJobs();
				setJobs(data.data);
				setCurrentPage(data.current_page);
				setTotalPages(data.total_pages);
				setTotalItems(data.total_items);
			} catch (error) {
				console.error('Error fetching jobs:', error);
			} finally {
				setLoading(false);
			}
		};

		void fetchData(); // Add 'void' here to silence the warning
	}, []);

	const handlePageChange = async (page: number) => {
		setLoading(true);
		setCurrentPage(page);
		const data = await getAllJobs(page);
		setJobs(data.data);
		setLoading(false);
	};

	return (
		<Layout title="Jobs">
			<div className={`u-container u-full-height ${styles.jobsContainer}`}>
				{loading ? (
					<div className={styles.jobsLoading}>
						<LoadingCircle strokeColor="rgba(0,0,0,.5)" message="Loading jobs for you"/>
					</div>
				) : (
					<>
						<div className={`u-flex u-flex-column u-align-stretch ${styles.jobItems}`}>
							{jobs.map((job) => (
								<BrowseJob key={job.id} job={job}/>
							))}
						</div>
						<div className="u-flex u-align-center u-justify-center">
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								totalItems={totalItems}
								onPageChange={async (page) => {
									await handlePageChange(page);
								}}
							/>
						</div>
					</>
				)}
			</div>
		</Layout>
	);
};

const JobsPageWithProvider: React.FC = () => (
	<JobProvider>
		<UserProvider>
			<JobsPage/>
		</UserProvider>
	</JobProvider>
);

export default JobsPageWithProvider;