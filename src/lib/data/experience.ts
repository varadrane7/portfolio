import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'fieldworker-se',
		company: 'FieldWorker',
		description:
			'- Built an LL-based PDF extraction pipeline for Service Detail Reports using GPT-4.1, converting complex multi-column, cross-page layouts into validated structured JSON with zero traditional OCR dependency.\n- Architected a local-first RAG pipeline for clinical case note processing (Ollama, ChromaDB, sentence-transformer embeddings) running fully within an 8GB VRAM budget.\n- Designed a reproducible benchmarking harness tracking latency, throughput, and quality metrics across chunking, retrieval, and quantization strategies to systematically reduce information loss.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Jersey City, NJ, USA',
		period: { from: new Date('2026-02-01') },
		skills: getSkills('llm', 'python', 'rag', 'docker', 'ts', 'js'),
		name: 'Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.FieldWorker,
		shortDescription:
			'Built an LLM-based PDF extraction pipeline and local-first RAG pipeline for clinical case note processing.'
	},
	{
		slug: 'njit-grader',
		company: 'New Jersey Institute of Technology',
		description:
			'- Teaching C and C++ to undergraduate students — covering memory management, pointers, data structures, and systems-level programming concepts.\n- Holding weekly office hours, grading assignments, and providing 1:1 feedback on code quality and debugging approaches.\n- Reinforced low-level fundamentals that directly apply to performance-sensitive backend work.',
		contract: ContractType.PartTime,
		type: 'Teaching Assistant (TA)',
		location: 'Newark, NJ',
		period: { from: new Date('2025-09-01'), to: new Date('2025-12-31') },
		skills: getSkills('clanguage', 'cpp', 'bash'),
		name: 'Teaching Assistant',
		color: 'red',
		links: [{ to: 'https://www.njit.edu/', label: 'NJIT' }],
		logo: Assets.NJIT,
		shortDescription:
			'Teaching C and C++ to undergraduate students and holding weekly office hours.'
	},
	{
		slug: 'kotak-manager',
		company: 'Kotak Securities',
		description:
			'- Improved API throughput by 30% by replacing session-based auth with a token architecture, reducing per-request authentication overhead across all user-facing endpoints.\n- Built an Alert Management service in .NET and SQL that cut infrastructure downtime by 15%, monitoring legacy system degradation and triggering automated notifications before failures escalated.\n- Refactored shared database access patterns into a reusable .NET library, eliminating two network hops and measurably reducing application latency across 12 internal services.\n- Designed a queue-based aggregation layer coordinating queries across multiple SQL databases, enabling consistent high-concurrency data retrieval for trading workflows.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2023-06-01'), to: new Date('2024-08-31') },
		skills: getSkills('rest', 'dotnet', 'js', 'angular', 'sql', 'docker', 'python', 'bash'),
		name: 'Software Engineer',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription: 'Improved API throughput by replacing session-based auth with tokens, and built an Alert Management service.'
	},
	{
		slug: 'kotak-mt',
		company: 'Kotak Securities',
		description:
			'- Built full-stack features across Angular and ASP.NET, owning both frontend components and SQL-backed API endpoints for internal trading and client-facing workflows.\n- Led migration of legacy applications from .NET Framework to .NET 7.0, updating dependency chains, resolving breaking changes, and aligning authentication flows with updated security standards.\n- Optimized high-frequency SQL queries for production API endpoints, identifying bottlenecks through query execution plans and reducing p95 latency in critical data retrieval paths.\n- Implemented bulk data ingestion pipelines for file upload workflows, enabling standardized cross-team database integration and reducing manual data handling.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2022-06-01'), to: new Date('2023-07-01') },
		skills: getSkills('oop', 'dotnet', 'js', 'csharp', 'sql', 'angular', 'css'),
		name: 'Junior Developer',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription:
			'Built full-stack features across Angular and ASP.NET, and migrated legacy apps to .NET 7.0.'
	},
	{
		slug: 'software-intern-senior',
		company: "Vivekanad Education Society's Institute of Technology",
		description:
			'- Built a full-stack web platform and Discord bot for on-demand student certificate distribution, handling user authentication via college email, bulk uploading of digitally-signed certificates, and real-time delivery through the Discord API.\n- Reduced administrative effort significantly by replacing a manual certificate issuance process with an automated, verified digital pipeline.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2021-01-01'), to: new Date('2021-08-31') },
		skills: getSkills('docker', 'js', 'html', 'css', 'firebase'),
		name: 'Intern, Senior Developer',
		color: 'yellow',
		links: [],
		logo: Assets.VES,
		shortDescription: 'Built a student certificate distribution platform and Discord Bot.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
