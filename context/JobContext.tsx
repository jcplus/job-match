import React, {createContext, useContext, useState} from 'react';

export interface Job {
	id: number;
	job_title: string;
	work_schedule: string;
	pay_rate: number;
	pay_unit: string;
	location: string;
	work_type: string;
	job_category: string[];
	job_description: string;
	required_skills: string[];
	preferred_skills: string[];
	contract_type: string;
	contractor: string;
	additional_info: string[];
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






