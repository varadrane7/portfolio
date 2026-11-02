import { base } from '$app/paths';
import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'stream-chat-organizer',
		color: '#577efb',
		description:
			'Designed a simple chrome extension to add visual elements to an ongoing live chat for better readability and improved interaction. Features include marking chats as read, pinning chats as viewer, and quote previous messages. All this runs in the client browser so no need for a separate back-end.',
		shortDescription: 'Improves chat readability by adding improved styles and features.',
		links: [{ to: 'https://github.com/varadrane7/stream-chat-organizer', label: 'GitHub' }],
		logo: Assets.JavaScript,
		name: 'Stream Chat Organizer - Chrome Extension',
		period: {
			from: new Date('2023-10-01'),
			to: new Date('2025-01-03')
		},
		skills: getSkills('js', 'sql', 'css'),
		type: 'Chrome Extension'
	},
	{
		slug: 'surface-crack-severity',
		color: '#ff3e00',
		description:
			'After running a binary classification on Video feed with wall cracks, our model can predict the severity of the crack. A well-known pre-trained object detection model, ‘YOLOv5’, is also implemented for comparison study. This was trained and tested on a self-annotated dataset with labels based on severity. An android app is also developed to deploy the YOLOv5 model. We also deplyed the said model using an Android App to test in the real world.',
		shortDescription:
			'Research published in Advanced Computing and Intelligent Technologies, Proceedings of ICACIT 2022, Springer',
		links: [
			{ to: 'https://link.springer.com/chapter/10.1007/978-981-19-2980-9_21', label: 'Springer' }
		],
		logo: Assets.Tensorflow,
		name: 'Surface Cracks Severity detection and Classification',
		period: {
			from: new Date('2021-06-15'),
			to: new Date('2022-08-14')
		},
		skills: getSkills('python', 'firebase', 'matlab', 'tensorflow'),
		type: 'Research'
	},
	{
		slug: 'home-lab',
		color: '#0997e5',
		description:
			'Designed and deployed a scalable, efficient, and multi-hosted Homelab connected with encrypted networking to deploy various community projects and self-made websites. This website is also hosted from the same homelab. Auto Scaling is handled with docker swarm and auto- deployments using docker registries for supported projects. Recently added support for across the globe access to in-home Iot devices, while making sure no personal data leaves unencrypted at any stage of the network.',
		shortDescription:
			'Local and off-site multi-machine Hosting setup designed to self-host personal and public content.',
		logo: Assets.Docker,
		name: 'Multi-Location HomeLab',
		period: {
			from: new Date('2020-07-01')
		},
		skills: getSkills('docker', 'dotnet', 'angular', 'arduino'),
		links: [{ to: 'https://www.kurlaserver.nl', label: 'Website' }],
		type: 'Project'
	},
	{
		slug: 'privguard-sentinel',
		color: '#8a2be2',
		description:
			'PrivGuard Sentinel is an intelligent, portable GitHub Action that checks every Pull Request for code quality, security, privacy, compliance, prompt injection, and hidden backdoors. It bridges the gap between static analysis and agentic reasoning by providing inline code review comments on the exact lines that introduce risk, powered by a rule-based engine and an LLM.',
		shortDescription: 'An intelligent, portable GitHub Action that checks every Pull Request for code quality, security, and privacy risks.',
		links: [
			{ to: 'https://github.com/varadrane7/privguard-sentinel', label: 'GitHub' },
			{ to: 'https://blog.varadrane.com/posts/privguard-sentinel/', label: 'Blog Post' }
		],
		logo: Assets.TypeScript,
		name: 'PrivGuard Sentinel',
		period: {
			from: new Date('2026-05-01')
		},
		skills: getSkills('ts', 'bash'),
		type: 'GitHub Action'
	},
	{
		slug: 'lazycurl',
		color: '#00add8',
		description:
			'LazyCurl is a powerful Terminal User Interface (TUI) for HTTP API interaction written in Go. It brings robust session management, visual request editing, and a built-in concurrent load testing engine directly to your terminal. It uses native curl under the hood, guaranteeing maximum compatibility and reliability.',
		shortDescription: 'The Terminal Interface for Curl, Stress Testing, and API Exploration.',
		links: [
			{ to: 'https://github.com/varadrane7/lazycurl', label: 'GitHub' },
			{ to: 'https://blog.varadrane.com/posts/lazycurl/', label: 'Blog Post' }
		],
		logo: Assets.Go,
		name: 'LazyCurl',
		period: {
			from: new Date('2026-05-01')
		},
		skills: getSkills('go', 'bash'),
		type: 'Tooling'
	},
	{
		slug: 'splitsync',
		color: '#10b981',
		description:
			'SplitSync is a privacy-first, installable PWA for itemized bill splitting that pushes straight to Splitwise. Items are assigned to one or more people with keyboard shortcuts, tax and tip are distributed proportionally to each person\'s subtotal, and a penny-accurate rounding correction guarantees the shares sum to the receipt total to the cent. Splitwise access uses OAuth 2.0 with the token held in an HTTP-only, secure cookie and forwarded through Next.js server proxy routes, so client-side JavaScript never sees it. There is no database: draft bills live in the browser and friends/groups are fetched on demand. Shipped as a multi-stage Docker build of a standalone Next.js server.',
		shortDescription:
			'Privacy-first itemized bill-splitting PWA with proportional tax/tip and Splitwise OAuth sync.',
		links: [{ to: 'https://github.com/varadrane7/bill-splitter', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: 'SplitSync',
		period: {
			from: new Date('2026-01-06')
		},
		skills: getSkills('ts', 'react', 'rest', 'docker'),
		type: 'Web App'
	},
	{
		slug: 'cloud-extraction-pipeline',
		color: '#ff9900',
		description:
			'A fully serverless, event-driven AWS pipeline that turns multi-page PDFs into schema-validated structured data. An S3 upload triggers a Step Functions state machine that uses Distributed Map for page-level parallelism across 8 Lambdas: ingest validation, page rendering, vision transcription, schema mapping, validation/scoring, embedding, cost tracking and API serving. Extraction is two-pass on Amazon Bedrock (Claude 3.5 Sonnet vision transcribes each page, a second pass maps the transcript to a strict Pydantic schema), with Titan embeddings stored in Aurora Serverless v2 + pgvector behind an HNSW index for semantic search. Failures retry, then land in an SQS dead-letter queue. The whole stack (IAM, VPC, Aurora, state machine, Lambda packaging, API Gateway) is modular Terraform with separate dev and prod environments, deployed by GitHub Actions via OIDC federation with no static credentials; lint, tests and terraform validate gate every pull request. Exact cost-per-document is tracked through CloudWatch Embedded Metric Format.',
		shortDescription:
			'Serverless PDF extraction on Step Functions, Lambda, Bedrock and Aurora/pgvector, all in Terraform.',
		links: [
			{ to: 'https://github.com/varadrane7/cloud-extraction-pipeline', label: 'GitHub' }
		],
		logo: Assets.AWS,
		name: 'Cloud Document Extraction Pipeline',
		period: {
			from: new Date('2026-08-29')
		},
		skills: getSkills('aws', 'python', 'llm', 'rag', 'sql', 'rest'),
		type: 'Cloud Infrastructure'
	},
	{
		slug: 'kindle-home-dashboard',
		color: '#4b5563',
		description:
			'A jailbroken 2024 Kindle turned into an always-on, touch-driven Home Assistant wall panel for a shared apartment. It runs KOReader without the Amazon framework, using a custom KOReader plugin written in Lua as the kiosk. On boot an upstart job stops ~30 Amazon services (sync, telemetry, store, Alexa) without modifying the root filesystem, so a reboot restores stock behaviour. Each poll is a single Home Assistant template request returning every watched entity as compact JSON, with adaptive polling (5s while media plays or a bus is close, 20s idle, 60s at night). Pages render to an offscreen buffer and a 64px tile diff refreshes only changed regions of the e-ink screen. Pages cover the clock, weather, live bus ETAs with a LEAVE NOW banner, media controls, who is home, PIN-protected per-room lights and laundry, climate and alerts, and a party mode for multi-room speakers. On battery it sleeps after idle with a static "asleep" page at zero power, and it has crash guards and an escape hatch back to the stock Kindle UI.',
		shortDescription:
			'Jailbroken Kindle running a custom KOReader plugin as an e-ink Home Assistant wall panel.',
		links: [],
		logo: Assets.Bash,
		name: 'Kindle Home Assistant Wall Panel',
		period: {
			from: new Date('2026-09-04')
		},
		skills: getSkills('bash', 'rest'),
		type: 'Embedded / IoT',
		screenshots: [
			{ src: `${base}/screenshots/kindle/01-home.png`, label: 'Home' },
			{ src: `${base}/screenshots/kindle/02-remote.png`, label: 'TV remote' },
			{ src: `${base}/screenshots/kindle/03-lights.png`, label: 'Lights' },
			{ src: `${base}/screenshots/kindle/06-house.png`, label: 'House' },
			{ src: `${base}/screenshots/kindle/07-party.png`, label: 'Party mode' },
			{ src: `${base}/screenshots/kindle/10-sleep.png`, label: 'Sleep' }
		]
	},
	{
		slug: 'njt-bus-eta',
		color: '#1a4f9c',
		description:
			'A containerized Python service that polls NJ Transit\'s GTFS-Realtime feed every 30 seconds, joins it with the static GTFS schedule, and serves per-stop "minutes until next bus" over a read-only REST API with health and debug endpoints. Each bus gets a three-tier fallback: realtime trip predictions, then a GPS estimate (the vehicle\'s position projected onto the route at timetable pace, deliberately biased early), then the timetable. Responses carry explicit ok / stale / no_upcoming / error states instead of silently wrong answers. Hardened like production: auto-refreshing auth tokens, cached static feed, read-only root filesystem, all Linux capabilities dropped and a 256 MB memory cap. It feeds Home Assistant sensors that drive "leave now" alerts and the Kindle wall panel for a 4-person apartment.',
		shortDescription:
			'Real-time NJ Transit bus ETA service with realtime → GPS → timetable fallback, feeding Home Assistant.',
		links: [],
		logo: Assets.Python,
		name: 'NJ Transit Bus ETA Service',
		period: {
			from: new Date('2026-10-07')
		},
		skills: getSkills('python', 'docker', 'rest'),
		type: 'Service'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
