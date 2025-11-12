import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'njit-grader',
		company: 'New Jersey Institute of Technology',
		description:
			'Graded assignments, quizzes, and midterms for CS 116 (C++) and CS 630 (Operating Systems) for 30–40 students via Canvas & Gradescope. Led weekly 1-hour office hours to clarify concepts and debug assignments and provided rapid email support to unblock students and maintain their learning momentum.',
		contract: ContractType.PartTime,
		type: 'Teaching Assistant (TA)',
		location: 'Newark, NJ',
		period: { from: new Date('2023-06-20') },
		skills: getSkills('cpp', 'clanguage', 'java', 'bash', 'python'),
		name: 'Teaching Assistant - Undergraduate and Graduate courses',
		color: 'red',
		links: [{ to: 'https://www.njit.edu/', label: 'NJIT' }],
		logo: Assets.NJIT,
		shortDescription:
			'Worked as Grader and Teaching Assistant for Graduate and Undergraduate Courses.'
	},
	{
		slug: 'kotak-manager',
		company: 'Kotak Securities',
		description:
			'Enhanced the Authentication and Access Control process for AD Authentication, increasing request speed by 30% and adding support for token-based sessions. Deployed a custom Alert Management System using .NET and SQL, reducing downtime and errors by 15% through instant error alerts. Created high-performance APIs using Typescript, ASP.NET and AWS Lambda functions, enabling business-critical operations with improved scalability and reduced latency. Following Microsoft’s suggestions, merged common functionality from 12 different applications into a single code library, reducing network complexity by 20%',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, MH, India',
		period: { from: new Date('2023-06-20'), to: new Date('2024-08-31') },
		skills: getSkills('js', 'angular', 'dotnet', 'sql', 'docker', 'python', 'bash'),
		name: 'Deputy Manager - IT Software',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription: 'Worked on various closed-source technologies and process improvement.'
	},
	{
		slug: 'kotak-mt',
		company: 'Kotak Securities',
		description:
			'Developed Full-stack applications with Angular and .NET, involving queue-based processing of requests, to facilitate data request queries from multiple SQL databases efficiently. Migrated WPF and Winforms applications written in .NET Framework to .NET 7.0 to stay compliant with company’s security standards',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, MH, India',
		period: { from: new Date('2022-06-20'), to: new Date('2023-06-19') },
		skills: getSkills('js', 'csharp', 'sql', 'angular', 'dotnet', 'css'),
		name: 'Management Trainee',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription:
			'Learnt the corporate ins and outs and professional development methodologies by working and managing projects.'
	},
	{
		slug: 'software-intern-senior',
		company: 'VESIT',
		description:
			'Designed and coded a website along with a Discord Chat Bot, to provide students their extracurricular certificates. Used college emails to authenticate and verify users, and developed a website to bulk upload digitally signed and verified certificates',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Mumbai, MH, India',
		period: { from: new Date('2021-1-2'), to: new Date('2021-8-1') },
		skills: getSkills('css', 'html', 'js', 'firebase'),
		name: 'Senior Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating an efficient certificate distribution method.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
