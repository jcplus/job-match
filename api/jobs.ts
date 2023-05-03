import {Job} from '../context/JobContext';

const mockJobs = {
	data: [
		{
			id: 9267,
			job_title: "Contract Farming Service User Site Development",
			work_schedule: "2.5 days/week (Rails)",
			pay_rate: 5000,
			pay_unit: 'hour',
			location: "Nationwide (Full Remote)",
			work_type: "Full Remote",
			job_category: ["Front-end Engineer", "Server-side Engineer"],
			job_description: "You will be involved in the development of a contract farming service user site. The static part of the front-end will be completed by design coding. You will be responsible for front-end development for integrating with Rails and connecting to the database. For the backend, we utilize Notion DB and you will be utilizing APIs and gems.",
			required_skills: ["Ruby on Rails experience", "HTML/CSS experience", "API development experience"],
			preferred_skills: ["Notion DB utilization experience", "API utilization experience", "Gem utilization experience"],
			contract_type: "Commissioned (Quasi-delegation contract)",
			contractor: "LASSIC Co., Ltd.",
			additional_info: ["Side job OK", "Long-term participation possible"],
			applied: false,
		},
		{
			id: 1840,
			job_title: "Design of Core System for Casting Service Provider",
			work_schedule: "2 days/week+ (TypeScript/Basic Design)",
			pay_rate: 6250,
			pay_unit: 'hour',
			location: "Nationwide (Full Remote)",
			work_type: "Full Remote",
			job_category: ["Front-end Engineer"],
			job_description: "You will be involved in the development of the core system for a casting service provider. You will be responsible for the basic design of the system development that manages the core information of the business. Since it manages major operations, it is an important system, and we prioritize quality over novelty and attention, and want to select a safe system. You will also be involved in SOL around the basic design with your knowledge.",
			required_skills: ["TypeScript experience", "SQL experience", "Basic design experience"],
			preferred_skills: ["GraphQL (Hasura) experience", "Next.js experience", "Experience in catching up and designing from the stage of requirements definition"],
			contract_type: "Commissioned (Quasi-delegation contract)",
			contractor: "LASSIC Co., Ltd.",
			additional_info: ["Side job OK", "Long-term participation possible"],
			applied: false,
		},
		{
			id: 1897,
			job_title: "System Development/Maintenance of DMM Point Club",
			work_schedule: "Full-time (Android/Kotlin)",
			pay_rate: 90000,
			pay_unit: 'hour',
			location: "Nationwide (Full Remote)",
			work_type: "Full Remote",
			job_category: ["Android Engineer"],
			job_description: "You will be involved in the development and maintenance of the system of DMM Point Club. DMM is working to create the DMM Economic Zone, which enables approximately 60 services to be cross-traversed. DMM points are at the center of this zone. DMM Point Club is a service for purchasing, managing, and promoting DMM points. We have a mobile version, and you will be responsible for the Android development of the mobile version. In addition, there is a possibility that you may also maintain the SDK that controls the login function of DMM.",
			required_skills: ["2+ years of Android (Kotlin) development experience", "Experience in using Android's Jetpack for overall development", "Ability to efficiently develop screens using JetpackCompose", "Understanding of Clean Architecture, Layered Architecture, and DDD, and ability to design using them"],
			preferred_skills: ["Ability to create design documents using tools such as PlantUML", "Ability to write test code", "Ability to maintain CI using YAML", "Experience in performing all the necessary tasks for app release"],
			contract_type: "Commissioned (Quasi-delegation contract)",
			contractor: "LASSIC Co., Ltd.",
			additional_info: ["Collaborative", "Experience in team development", "Emphasis on achieving results as a team"],
			applied: true,
		},
		{
			id: 2601,
			job_title: "Full-stack Web Development for Real Estate Platform",
			work_schedule: "Full-time (Node.js/React.js)",
			pay_rate: 6000,
			pay_unit: 'hour',
			location: "Nationwide (Full Remote)",
			work_type: "Full Remote",
			job_category: ["Full-stack Engineer"],
			job_description: "You will be involved in the development of a real estate platform as a full-stack engineer. You will be responsible for the development of the platform and its functions using Node.js and React.js. In addition, we plan to implement a feature that allows you to search for real estate based on images using computer vision technology, so we hope you can also work on that aspect of the project.",
			required_skills: ["Experience in web application development using Node.js and React.js", "Experience in building and utilizing APIs", "Experience in building scalable and high-performance systems"],
			preferred_skills: ["Experience in using computer vision technology in image search", "Experience in building distributed systems using microservices", "Experience in building apps with GraphQL"],
			contract_type: "Commissioned (Quasi-delegation contract)",
			contractor: "Property Innovations, Inc.",
			additional_info: ["Experience in real estate industry preferred", "Collaborative", "Long-term participation possible"],
			applied: false,
		},
	],
	current_page: 1,
	total_pages: 85,
	total_items: 995,
};

export const mockJobDetail: Job = {
	id: 9267,
	job_title: 'Backend Developer (Go/Ruby) for a Retail Sales Staff DX Service',
	work_schedule: '11:00 - 18:00 (flexible)',
	pay_rate: 900000,
	pay_unit: 'month',
	location: 'Remote (Nationwide)',
	work_type: 'Full remote',
	job_category: ['Server-side Engineer'],
	job_description:
		'Develop a smartphone application for our in-house retail sales staff DX service. We are currently transitioning from Ruby to Go for improved development efficiency and quality.',
	required_skills: [
		'5+ years of web application development experience using Go, Ruby, or similar languages',
		'Interest in and experience with Go language',
		'Experience with MySQL or PostgreSQL',
		'Experience with Git or other source control tools',
		'Experience in designing large-scale services considering load and scaling',
	],
	preferred_skills: [
		'Experience with MVC frameworks (Ruby on Rails preferred)',
		'Experience with AWS',
		'Front-end development experience',
		'Experience with React or Vue.js',
		'Database design and tuning',
		'Experience with open source projects and contributions',
		'Experience with statically typed and functional languages',
	],
	contract_type: 'Contract (semi-consignment)',
	contractor: 'LASSIC Co., Ltd.',
	additional_info: [
		'Work with a rapidly growing venture company with close communication during development',
		'Fully remote work',
		'Candidates available 5 days a week are welcome',
	],
	applied: false,
};

export async function getAllJobs(page: number = 1): Promise<{ data: Job[]; current_page: number; total_pages: number; total_items: number }> {
	return new Promise((resolve) => {
		setTimeout(() => {
			mockJobs.current_page = page;
			resolve(mockJobs);
		}, 1000);
	});
}

export const getJobById = async (id: number): Promise<Job> => {
	// Here we are simulating an API call with a delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// In this example, we always return the same job detail. In a real-world scenario,
	// you would fetch the job detail from your API or database using the provided id.
	return mockJobDetail;
};

export async function applyJob(userId: number, jobId: number): Promise<{ success: boolean; message: string }> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const random = Math.random();
			if (random >= 0.5) {
				resolve({
					success: true,
					message: 'You have successfully applied for this job.',
				});
			} else {
				resolve({
					success: false,
					message: 'There was an issue applying for this job. Please try again.',
				});
			}
		}, 1000);
	});
}