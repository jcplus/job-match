import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import JobDetails from '../../components/JobDetails';
import { JobProvider, useJobContext } from '../../context/JobContext';

const fetchJobById = async (id: string) => {
	// Replace this with the actual API call to fetch job details by ID
	return {
		id,
		title: '【2.5 days a week / Rails】Contract farm service user site development',
		// ... other properties
	};
};

const JobPage: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const { jobs, setJobs } = useJobContext();
	const job = jobs.find((job) => job.id === id);

	useEffect(() => {
		const fetchData = async () => {
			if (!job && id) {
				const data = await fetchJobById(id as string);
				setJobs((prevJobs) => [...prevJobs, data]);
			}
		};

		fetchData();
	}, [id]);

	if (!job) {
		return <Layout>Loading...</Layout>;
	}

	return (
		<Layout title={job.title}>
			<JobDetails job={job} />
		</Layout>
	);
};

const JobPageWithProvider: React.FC = () => (
	<JobProvider>
		<JobPage />
	</JobProvider>
);

export default JobPageWithProvider;