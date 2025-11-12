import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'angular',
		color: 'red',
		description:
			'Angular is a robust, TypeScript-based front-end framework developed by Google that simplifies building dynamic, scalable single-page applications.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'arduino',
		color: 'blue',
		description:
			'Arduino is an open-source electronics platform that combines user-friendly hardware and software to empower rapid prototyping of interactive projects.',
		logo: Assets.Arduino,
		name: 'Arduino',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'bash',
		color: 'green',
		description:
			'Bash, short for "Bourne Again Shell," is a versatile command-line interpreter and scripting language widely used in Unix-like operating systems for automating tasks and system administration.',
		logo: Assets.Bash,
		name: 'Bash',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'blender',
		color: 'orange',
		description:
			'Blender is an open-source 3D creation suite that offers a comprehensive workflow for modeling, animation, simulation, rendering, and more, empowering digital artists to bring their visions to life.',
		logo: Assets.Blender,
		name: 'Blender',
		category: 'design'
	}),
	defineSkill({
		slug: 'clanguage',
		color: 'blue',
		description:
			'C is a powerful, efficient programming language that provides low-level memory access, making it a cornerstone for systems programming and performance-critical applications.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description:
			'C# is a modern, object-oriented programming language developed by Microsoft that streamlines building robust applications on the .NET platform.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS, short for Cascading Style Sheets, is a stylesheet language that defines the look and formatting of web pages, enabling developers to separate content from design for visually appealing user experiences.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Docker is an open platform that enables developers to package applications into lightweight, portable containers, ensuring consistent performance across various environments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'dotnet',
		color: 'purple',
		description:
			'Dotnet (.NET) is an open-source, cross-platform development framework by Microsoft that simplifies building scalable, high-performance applications for web, mobile, desktop, and cloud platforms.',
		logo: Assets.Dotnet,
		name: '.NET',
		category: 'library'
	}),
	defineSkill({
		slug: 'figma',
		name: 'Figma',
		color: 'red',
		category: 'design',
		logo: Assets.Figma,
		description:
			'Figma is a cloud-based design and prototyping tool that empowers real-time collaboration, streamlining the creation of intuitive user interfaces.'
	}),
	defineSkill({
		slug: 'firebase',
		name: 'Firebase',
		color: 'orange',
		category: 'db',
		logo: Assets.Firebase,
		description:
			'Firebase is a comprehensive development platform by Google that provides real-time databases, authentication, hosting, and analytics services to streamline building and scaling web and mobile applications.'
	}),
	defineSkill({
		slug: 'google-cloud',
		name: 'Google Cloud',
		color: 'yellow',
		category: 'devops',
		logo: Assets.GoogleCloud,
		description:
			'Google Cloud is a comprehensive suite of cloud services by Google that empowers businesses to build, scale, and secure applications with advanced tools and global infrastructure.'
	}),
	defineSkill({
		slug: 'js',
		name: 'Javascript',
		color: 'yellow',
		category: 'pro-lang',
		logo: Assets.JavaScript,
		description:
			'JavaScript is a dynamic, high-level programming language that powers interactive web experiences and modern applications across both client and server sides.'
	}),
	defineSkill({
		slug: 'python',
		name: 'Python',
		color: 'blue',
		category: 'pro-lang',
		logo: Assets.Python,
		description:
			'Python is a versatile, high-level programming language known for its readability and extensive libraries, making it a popular choice for everything from web development to scientific computing and machine learning.'
	}),
	defineSkill({
		slug: 'tensorflow',
		name: 'Tensorflow',
		color: 'orange',
		category: 'library',
		logo: Assets.Tensorflow,
		description:
			'Figma is a cloud-based design and prototyping tool that empowers real-time collaboration, streamlining the creation of intuitive user interfaces.'
	}),
	defineSkill({
		slug: 'matlab',
		name: 'Matlab',
		color: 'red',
		category: 'pro-lang',
		logo: Assets.Matlab,
		description:
			'MATLAB is a high-level programming environment renowned for its powerful numerical computing, data visualization, and algorithm development capabilities in engineering and scientific research.'
	}),
	defineSkill({
		slug: 'sql',
		name: 'SQL',
		color: 'yellow',
		category: 'pro-lang',
		logo: Assets.PostgreSQL,
		description:
			'SQL is a query language for relational databases. It is used to perform operations in the database via a Database Management System'
	}),
	defineSkill({
		slug: 'cpp',
		name: 'C++',
		color: 'blue',
		category: 'pro-lang',
		logo: Assets.Cpp,
		description:
			'C++ is a high-level, general-purpose programming language known for its performance and efficiency. It is widely used in software and game development, robotics, scientific computing, and VR/AR due to its ability to handle complex applications while offering low-level memory manipulation and object-oriented features.'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
