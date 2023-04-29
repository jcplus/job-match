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
			additional_info: ["Side job OK", "Long-term participation possible"]
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
			additional_info: ["Side job OK", "Long-term participation possible"]
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
			additional_info: ["Collaborative", "Experience in team development", "Emphasis on achieving results as a team"]
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
			additional_info: ["Experience in real estate industry preferred", "Collaborative", "Long-term participation possible"]
		},
		{
			id: 9052,
			job_title: "Java Development for Cloud Service Provider",
			work_schedule: "Full-time (Java/Spring)",
			pay_rate: 7500,
			pay_unit: 'hour',
			location: "Tokyo, Japan",
			work_type: "On-site",
			job_category: ["Java Developer"],
			job_description: "You will be involved in the development and operation of cloud services for enterprise customers using Java and Spring. The services include a variety of cloud-based applications, such as data analysis and processing, as well as systems for managing cloud environments. You will also be responsible for designing and implementing new features and improving the performance of existing systems. You will work in collaboration with other developers, product managers, and other stakeholders to ensure the high quality of the services.",
			required_skills: ["Experience in Java application development", "Experience in using Spring framework", "Experience in developing cloud-based systems", "Ability to write clean, maintainable, and testable code", "Knowledge of software development best practices and design patterns"],
			preferred_skills: ["Experience in developing microservices and distributed systems", "Experience in using Docker and Kubernetes", "Experience in using NoSQL databases", "Experience in using message queue systems such as Kafka"],
			contract_type: "Full-time",
			contractor: "CloudWorks Co., Ltd.",
			additional_info: ["Opportunities for career growth", "Collaborative work environment", "Training and development programs"]
		},
		{
			id: 4351,
			job_title: "Front-end Development for E-commerce Site",
			work_schedule: "Part-time (React.js)",
			pay_rate: 2500,
			pay_unit: 'hour',
			location: "Nationwide (Full Remote)",
			work_type: "Full Remote",
			job_category: ["Front-end Developer"],
			job_description: "You will be involved in the front-end development of an e-commerce site as a part-time React.js developer. You will work on the development and improvement of the site's features, such as the product catalog and shopping cart, as well as the overall user experience. You will also be responsible for creating responsive designs that work well on both desktop and mobile devices.",
			required_skills: ["Experience in front-end development using React.js", "Experience in building responsive designs using CSS and HTML", "Experience in using Git and related tools"],
			preferred_skills: ["Experience in using Redux and related libraries", "Experience in building and consuming APIs", "Experience in using design tools such as Figma and Sketch"],
			contract_type: "Part-time",
			contractor: "E-Commerce Inc.",
			additional_info: ["Flexible work schedule", "Opportunities for full-time employment", "Collaborative work environment"]
		},
		{
			id: 6723,
			job_title: "Machine Learning Development for HealthTech Start-up",
			work_schedule: "Full-time (Python)",
			pay_rate: 1000000,
			pay_unit: 'month',
			location: "Tokyo, Japan",
			work_type: "On-site",
			job_category: ["Machine Learning Engineer"],
			job_description: "You will be involved in the development of machine learning algorithms and models for a healthtech start-up. You will work on analyzing large data sets, developing and implementing machine learning models, and evaluating their performance. You will also be responsible for optimizing and improving the models.",
			required_skills: ["Experience in machine learning and data analysis using Python", "Experience in using machine learning frameworks such as TensorFlow or PyTorch", "Experience in building and deploying machine learning models", "Ability to write clean and maintainable code", "Good understanding of statistics and probability theory"],
			preferred_skills: ["Experience in natural language processing or computer vision", "Experience in cloud computing and distributed systems", "Experience in working with healthcare or medical data"],
			contract_type: "Full-time",
			contractor: "HealthTech Start-up Co., Ltd.",
			additional_info: ["Opportunities for career growth", "Collaborative work environment", "Flexible work schedule"]
		},
		{
			id: 1298,
			job_title: "Full-stack Development for SaaS Company",
			work_schedule: "Full-time (Ruby on Rails/React.js)",
			pay_rate: 800000,
			pay_unit: 'month',
			location: "Tokyo, Japan",
			work_type: "On-site",
			job_category: ["Full-stack Developer"],
			job_description: "You will be involved in the development of a SaaS platform as a full-stack developer, using Ruby on Rails and React.js. You will work on developing new features and improving the existing ones, as well as ensuring the high performance and scalability of the platform. You will also work closely with the product and design teams to ensure the best user experience for the customers.",
			required_skills: ["Experience in full-stack development using Ruby on Rails and React.js", "Experience in building and consuming APIs", "Experience in using Git and related tools", "Experience in writing clean and maintainable code", "Good understanding of software development best practices and design patterns"],
			preferred_skills: ["Experience in using AWS or other cloud platforms", "Experience in building and deploying microservices", "Experience in using GraphQL", "Experience in using Docker and Kubernetes"],
			contract_type: "Full-time",
			contractor: "SaaS Company Co., Ltd.",
			additional_info: ["Opportunities for career growth", "Collaborative work environment", "Flexible work schedule"]
		},
		{
			id: 7274,
			job_title: "Front-end Development for E-commerce Company",
			work_schedule: "Full-time (React.js)",
			pay_rate: 700000,
			pay_unit: 'month',
			location: "Tokyo, Japan",
			work_type: "On-site",
			job_category: ["Front-end Developer"],
			job_description: "You will be involved in the development of an e-commerce platform as a front-end developer, using React.js. You will work on developing and improving the user interface and experience, as well as ensuring the performance and responsiveness of the platform. You will also work closely with the product and design teams to ensure the best user experience for the customers.",
			required_skills: ["Experience in front-end development using React.js", "Experience in building and consuming APIs", "Experience in using Git and related tools", "Experience in writing clean and maintainable code", "Good understanding of web development best practices and design patterns"],
			preferred_skills: ["Experience in using TypeScript", "Experience in using Next.js", "Experience in using GraphQL", "Experience in using Docker and Kubernetes"],
			contract_type: "Full-time",
			contractor: "E-commerce Company Co., Ltd.",
			additional_info: ["Opportunities for career growth", "Collaborative work environment", "Flexible work schedule"]
		},
		{
			id: 8493,
			job_title: "Data Science for Consulting Firm",
			work_schedule: "Full-time (Python)",
			pay_rate: 1200000,
			pay_unit: 'month',
			location: "Tokyo, Japan",
			work_type: "On-site",
			job_category: ["Data Scientist"],
			job_description: "You will be involved in data analysis and modeling for consulting projects as a data scientist, using Python. You will work on analyzing large and complex data sets, developing and implementing machine learning models, and presenting insights and recommendations to the clients. You will also be responsible for developing and maintaining data pipelines and infrastructure.",
			required_skills: ["Experience in data analysis and modeling using Python", "Experience in using machine learning frameworks such as TensorFlow or PyTorch", "Experience in building and deploying machine learning models", "Good understanding of statistics and probability theory", "Ability to communicate effectively with both technical and non-technical stakeholders"],
			preferred_skills: ["Experience in using cloud computing and distributed systems", "Experience in using natural language processing or computer vision", "Experience in working with financial or marketing data"],
			contract_type: "Full-time",
			contractor: "Consulting Firm Co., Ltd.",
			additional_info: ["Opportunities for career growth", "Collaborative work environment", "Flexible work schedule"]
		}
	],
	current_page: 1,
	total_pages: 100,
	total_items: 995,
};

export async function getAllJobs(page?: number): Promise<{ data: Job[]; current_page: number; total_pages: number; total_items: number }> {
	return Promise.resolve(mockJobs);
	// const response = await fetch(`/api/jobs?page=${page || 1}`);
	// const data = await response.json();
	// return {
	// 	data: data.data,
	// 	current_page: data.current_page,
	// 	total_pages: data.total_pages,
	// 	total_items: data.total_items,
	// };
}

export async function getJobById(id: number) {
	const job = mockJobs.data.find((job) => job.id === id);
	if (job) {
		return Promise.resolve(job);
	} else {
		return Promise.reject(new Error('Job not found'));
	}
}