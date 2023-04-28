import React from 'react';
import Link from 'next/link';

interface Job {
	id: string;
	title: string;
	// ... other properties
}

interface BrowseJobProps {
	job: Job;
}

const BrowseJob: React.FC<BrowseJobProps> = ({ job }) => {
	return (
		<div>
			<Link href={`/jobs/${job.id}`}>
				<h2>{job.title}</h2>
			</Link>
			{/* Display other job information here */}
		</div>
	);
};

export default BrowseJob;