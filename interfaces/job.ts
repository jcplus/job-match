export type Job = {
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
	applied: boolean;
}

export type Jobs = Job[];