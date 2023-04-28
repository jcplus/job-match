import React, {createContext, useContext, useState} from 'react';

interface Job {
	id: string;
	title: string;
	// ... other properties
}

interface JobContextData {
	jobs: Job[];
	setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

const JobContext = createContext<JobContextData | undefined>(undefined);

export const JobProvider: React.FC = ({children}) => {
	const [jobs, setJobs] = useState<Job[]>([]);

	return (
		<JobContext.Provider value={{jobs, setJobs}}>
			{children}
		</JobContext.Provider>
	);
};

export const useJobContext = () => {
	const context = useContext(JobContext);
	if (context === undefined) {
		throw new Error('useJobContext must be used within a JobProvider');
	}
	return context;
};