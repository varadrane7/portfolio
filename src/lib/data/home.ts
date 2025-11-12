import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Varad Rane';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Aspiring software engineer with a passion for building scalable, efficient, and user-centric solutions, driven by a strong technical foundation and a commitment to continuous learning.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/varadrane7', icon: 'i-carbon-logo-github' },
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/varadrane7',
			icon: 'i-carbon-logo-linkedin'
		},
		{ label: 'Twitter', href: 'https://twitter.com/varadrane07', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:hello@varadrane.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
