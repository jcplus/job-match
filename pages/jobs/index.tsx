import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import Layout from '../../components/Layout';
import BrowseJob from '../../components/BrowseJob';
import Pagination from '../../components/Pagination';
import LoadingCircle from '../../components/LoadingCircle';

import styles from '../../styles/jobs.module.css';

import {setJobsPage} from '../../redux/reducers/jobs';
import {getAllJobs} from '../../api/jobs';

const JobsPage: React.FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const jobsPage = useSelector((state: RootState) => state.jobs.jobsPage);

	const [jobs, setJobs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const pageParam = router.query.page;
			const requestedPage = pageParam ? parseInt(pageParam as string, 10) : 1;

			try {
				const data = await getAllJobs(requestedPage);
				setJobs(data.data);
				setCurrentPage(requestedPage);
				setTotalPages(data.total_pages);
				setTotalItems(data.total_items);
				dispatch(setJobsPage(requestedPage));
			} catch (error) {
				console.error('Error fetching jobs:', error);
			} finally {
				setLoading(false);
			}
		};

		void fetchData();
	}, [router.query]);

	const handlePageChange = async (page: number) => {
		setLoading(true);
		setCurrentPage(page);
		dispatch(setJobsPage(page));
		const data = await getAllJobs(page);
		setJobs(data.data);
		setLoading(false);

		const newUrl = page === 1 ? '/jobs' : `/jobs?page=${page}`;
		await router.push(newUrl, undefined, {shallow: true});
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

export default JobsPage;