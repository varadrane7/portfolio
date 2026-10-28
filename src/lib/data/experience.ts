import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'fieldworker-se',
		company: 'FieldWorker',
		description:
			'- Built an LLM document-extraction pipeline (GPT-4.1) turning multi-column, cross-page PDF reports into schema-validated JSON, automating ~95% of client intake and removing manual data entry from the workflow.\n- Architected a local-first RAG pipeline for clinical case notes (Ollama, ChromaDB, sentence-transformer embeddings, PostgreSQL vector storage) engineered to run inside an 8GB VRAM budget so sensitive data never left the environment; adopted for 97% of new client entries in production.\n- Designed a reproducible benchmarking harness measuring latency, throughput and retrieval quality across chunking, retrieval and quantization strategies; heading-based markdown chunking won, raising retrieval accuracy from 72% to 93%.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Princeton, NJ, USA',
		period: { from: new Date('2026-02-01') },
		skills: getSkills('llm', 'python', 'rag', 'docker', 'ts', 'js'),
		name: 'Software Developer',
		color: 'blue',
		links: [],
		logo: Assets.FieldWorker,
		shortDescription:
			'Built an LLM document-extraction pipeline automating ~95% of client intake and a local-first RAG pipeline adopted for 97% of new client entries.'
	},
	{
		slug: 'njit-grader',
		company: 'New Jersey Institute of Technology',
		description:
			'- Built an automated grading system running student Python and C++ submissions against test suites in isolated containers, with an LLM generating structured HTML feedback on code quality; cut turnaround for 50 students from 5 days to 6 hours.',
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
			'Built an automated, containerized grading system with LLM feedback; cut turnaround from 5 days to 6 hours.'
	},
	{
		slug: 'kotak-manager',
		company: 'Kotak Securities',
		description:
			'- Built token-based authentication from scratch for trading APIs serving 2M users at ~260 req/s peak, 30% above the previous 200 req/s, setting the security and audit-compliance baseline for all later internal applications; remediated 12 penetration-test findings and authored the compliance docs.\n- Architected alert management across 100+ production servers and message queues with configurable health checks, cutting quarterly downtime from 6 hours to 5 and automating post-incident root-cause reporting.\n- Built a .NET Standard 2.1 shared library for data access and logging adopted by 50+ engineers across 4 teams; removed two network hops per request and resolved a production IIS socket-exhaustion failure.\n- Designed an internal API gateway centralizing auth, CORS and rate limiting, with SQL-driven routing that enabled parallel live-environment testing against production data with no separate staging deployment.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2023-06-01'), to: new Date('2024-08-31') },
		skills: getSkills('rest', 'dotnet', 'js', 'angular', 'sql', 'docker', 'python', 'bash'),
		name: 'Software Engineer II',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription: 'Built token-based auth for trading APIs serving 2M users, an internal API gateway, and alerting across 100+ servers.'
	},
	{
		slug: 'kotak-mt',
		company: 'Kotak Securities',
		description:
			'- Optimized high-frequency production SQL via execution-plan analysis and indexing, cutting p95 latency on critical retrieval paths from 237 ms to 145 ms.\n- Migrated a legacy CRM (70 views) from .NET Framework to .NET 7 with zero production downtime, resolving breaking changes and realigning auth flows to updated security standards.\n- Built a reusable bulk file-upload module with validation, transactional error handling and user-facing recovery, standardizing CSV ingestion across 7 teams and halving development time for new upload workflows.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2022-06-01'), to: new Date('2023-06-01') },
		skills: getSkills('oop', 'dotnet', 'js', 'csharp', 'sql', 'angular', 'css'),
		name: 'Software Engineer',
		color: 'red',
		links: [{ to: 'https://www.kotaksecurities.com/', label: 'Kotak Securities' }],
		logo: Assets.Kotak,
		shortDescription:
			'Cut p95 SQL latency from 237 ms to 145 ms and migrated a 70-view CRM to .NET 7 with zero downtime.'
	},
	{
		slug: 'software-intern-senior',
		company: "Vivekanand Education Society's Institute of Technology",
		description:
			'- Built a full-stack certificate-distribution platform and Discord bot with college-email authentication, bulk upload of digitally signed certificates and real-time delivery via the Discord API, cutting issuance turnaround from 30 days to 10 minutes for 2,500+ students.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Mumbai, Maharashtra, India',
		period: { from: new Date('2021-01-01'), to: new Date('2021-08-31') },
		skills: getSkills('docker', 'js', 'html', 'css', 'firebase'),
		name: 'Software Engineering Intern - Renaissance Cell',
		color: 'yellow',
		links: [],
		logo: Assets.VES,
		shortDescription: 'Built a student certificate distribution platform and Discord Bot.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
