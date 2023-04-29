import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import BrowseJob from '../../components/BrowseJob';
import Pagination from '../../components/Pagination';
import {JobProvider, useJobContext} from '../../context/JobContext';
import {getAllJobs} from '../../api/jobs';
import styles from '../../styles/jobs.module.css';

const JobsPage: React.FC = () => {
	const {jobs, setJobs} = useJobContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAllJobs();
				setJobs(data.data);
				setCurrentPage(data.current_page);
				setTotalPages(data.total_pages);
				setTotalItems(data.total_items);
			} catch (error) {
				console.error('Error fetching jobs:', error);
			}
		};

		void fetchData(); // Add 'void' here to silence the warning
	}, []);

	const handlePageChange = async (page: number) => {
		setCurrentPage(page);
		const data = await getAllJobs(page);
		setJobs(data.data);
	};

	return (
		<Layout title="Jobs">
			<div className={`u-container ${styles.jobsContainer}`}>
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
							const data = await getAllJobs(page);
							setJobs(data.data);
							setCurrentPage(data.current_page);
							setTotalPages(data.total_pages);
							setTotalItems(data.total_items);
						}}
					/>
				</div>
			</div>
		</Layout>
	);
};

const JobsPageWithProvider: React.FC = () => (
	<JobProvider>
		<JobsPage/>
	</JobProvider>
);

export default JobsPageWithProvider;