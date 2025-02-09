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
		skills: getSkills('js', 'css'),
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
		skills: getSkills('python', 'matlab', 'tensorflow'),
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
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
