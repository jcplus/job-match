import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import BrowseJob from '../../components/BrowseJob';
import {JobProvider, useJobContext} from '../../context/JobContext';
import styles from '../../styles/jobs.module.css';
import {getAllJobs} from '../../api/jobs'; // 引入 getAllJobs 函数

const JobsPage: React.FC = () => {
	const {jobs, setJobs} = useJobContext();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAllJobs(); // 使用 getAllJobs 函数获取工作数据
			setJobs(data);
		};

		fetchData();
	}, []);

	return (
		<Layout title="Jobs">
			<div className="u-container">
				<div className="u-flex u-flex-column u-align-stretch">
					{jobs.map((job) => (
						<BrowseJob key={job.id} job={job}/>
					))}
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