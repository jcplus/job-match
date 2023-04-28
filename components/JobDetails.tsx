import React from 'react';

interface Job {
	id: string;
	title: string;
	// ... other properties
}

interface JobDetailsProps {
	job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
	return (
		<div>
			<h2>{job.title}</h2>
			{/* Display other job details here */}
		</div>
	);
};

export default JobDetails;