import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Masters in Computer Science',
		description:
			'Currently pursuing Masters in Computer Science at NJIT, from Spring 2025 semester.',
		location: 'NJ, USA',
		logo: Assets.NJIT,
		name: 'Masters at NJIT',
		organization: 'YWCC, New Jersey Institute of Technology',
		period: { from: new Date('2025-01-21') },
		shortDescription: 'Started my masters studies from Jan 2025',
		slug: 'masters',
		subjects: [
			'Computer Architecture',
			'Algorithms and Data structures',
			'Cryptography',
			'Database Management'
		]
	},
	{
		degree: 'Bachelor of Engineering',
		description: 'CGPA: 9.32/10',
		location: 'Mumbai',
		logo: Assets.VES,
		name: 'Bachelors in Electronics - VESIT',
		organization: 'VESIT',
		period: { from: new Date(2018, 7, 1), to: new Date(2022, 5, 31) },
		shortDescription: 'Electronics Engineering',
		slug: 'bachelors',
		subjects: ['C', 'Python', 'Java', 'Robotics', 'Embedded Systems', 'Image Processing']
	}
];

const EducationData = { title, items };

export default EducationData;
