/**
 * Generates a Markdown twin of every content route into dist/, plus an nginx
 * map include (dist/markdown-tokens.conf) with per-route x-markdown-tokens /
 * x-original-tokens estimates, so nginx can do Accept-header negotiation
 * against prebuilt static files without a live backend.
 */
import { mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import BaseData from '../src/lib/data/base';
import HomeData from '../src/lib/data/home';
import ResumeData from '../src/lib/data/resume';
import ExperienceData from '../src/lib/data/experience';
import ProjectsData from '../src/lib/data/projects';
import EducationData from '../src/lib/data/education';
import SkillsData, { groupByCategory } from '../src/lib/data/skills';
import type { Experience, Project, Education, Item, Link } from '../src/lib/data/types';

const DIST = join(process.cwd(), 'dist');

const fmtDate = (d?: Date) => (d ? d.toISOString().slice(0, 7) : 'Present');

const fmtPeriod = (period: { from: Date; to?: Date }) =>
	`${fmtDate(period.from)} – ${fmtDate(period.to)}`;

const fmtLinks = (links: Array<Link> = []) =>
	links.length ? links.map((l) => `[${l.label}](${l.to})`).join(', ') : '';

const itemSection = (title: string, item: Item, extra: Array<string> = []) => {
	const lines = [`## ${title}`, ''];
	if (item.shortDescription) lines.push(item.shortDescription, '');
	lines.push(...extra);
	if (item.description) lines.push(item.description, '');
	return lines.join('\n');
};

// estimate tokens ~= chars / 4 (rough, provider-agnostic heuristic)
const estimateTokens = (text: string) => Math.ceil(text.length / 4);

type Route = { uri: string; markdown: string; htmlBytes: number };

async function indexHtmlBytes(): Promise<number> {
	try {
		const s = await stat(join(DIST, 'index.html'));
		return s.size;
	} catch {
		return 0;
	}
}

async function main() {
	const routes: Array<Route> = [];
	const htmlBytes = await indexHtmlBytes();

	const push = (uri: string, markdown: string) => {
		routes.push({ uri, markdown: markdown.trim() + '\n', htmlBytes });
	};

	// Home
	push(
		'/index.md',
		[
			`# ${HomeData.title}`,
			'',
			HomeData.hero.description,
			'',
			'## Links',
			'',
			HomeData.hero.links.map((l) => `[${l.label}](${l.href})`).join(', ')
		].join('\n')
	);

	// Resume
	push('/resume.md', [`# ${ResumeData.title}`, '', `[Download PDF](${ResumeData.resume})`].join('\n'));

	// Experience list + detail
	push(
		'/experience.md',
		[
			`# ${ExperienceData.title}`,
			'',
			...ExperienceData.items.map((item: Experience) =>
				[
					`## ${item.name} — ${item.company}`,
					`${item.type} · ${item.contract} · ${item.location} · ${fmtPeriod(item.period)}`,
					'',
					item.shortDescription,
					''
				].join('\n')
			)
		].join('\n')
	);

	for (const item of ExperienceData.items as Array<Experience>) {
		push(
			`/experience/${item.slug}.md`,
			[
				`# ${item.name} — ${item.company}`,
				`${item.type} · ${item.contract} · ${item.location} · ${fmtPeriod(item.period)}`,
				'',
				item.description,
				'',
				item.skills.length ? `**Skills:** ${item.skills.map((s) => s.name).join(', ')}` : '',
				fmtLinks(item.links)
			].join('\n')
		);
	}

	// Projects list + detail
	push(
		'/projects.md',
		[
			`# Projects`,
			'',
			...ProjectsData.items.map((item: Project) =>
				[`## ${item.name}`, `${item.type} · ${fmtPeriod(item.period)}`, '', item.shortDescription, ''].join(
					'\n'
				)
			)
		].join('\n')
	);

	for (const item of ProjectsData.items as Array<Project>) {
		push(
			`/projects/${item.slug}.md`,
			[
				`# ${item.name}`,
				`${item.type} · ${fmtPeriod(item.period)}`,
				'',
				item.description,
				'',
				item.skills.length ? `**Skills:** ${item.skills.map((s) => s.name).join(', ')}` : '',
				fmtLinks(item.links)
			].join('\n')
		);
	}

	// Education list + detail
	push(
		'/education.md',
		[
			`# ${EducationData.title}`,
			'',
			...EducationData.items.map((item: Education) =>
				[
					`## ${item.degree} — ${item.organization}`,
					`${item.location} · ${fmtPeriod(item.period)}`,
					'',
					item.shortDescription,
					''
				].join('\n')
			)
		].join('\n')
	);

	for (const item of EducationData.items as Array<Education>) {
		push(
			`/education/${item.slug}.md`,
			[
				`# ${item.degree} — ${item.organization}`,
				`${item.location} · ${fmtPeriod(item.period)}`,
				'',
				item.description,
				'',
				item.subjects.length ? `**Subjects:** ${item.subjects.join(', ')}` : ''
			].join('\n')
		);
	}

	// Skills list + detail
	const skillGroups = groupByCategory('');
	push(
		'/skills.md',
		[
			`# Skills`,
			'',
			...skillGroups.map((group) =>
				[`## ${group.category.name}`, '', group.items.map((s) => s.name).join(', '), ''].join('\n')
			)
		].join('\n')
	);

	for (const item of SkillsData.items) {
		push(
			`/skills/${item.slug}.md`,
			[`# ${item.name}`, '', item.description || item.name].join('\n')
		);
	}

	// write files
	for (const route of routes) {
		const path = join(DIST, route.uri.replace(/^\//, ''));
		await mkdir(dirname(path), { recursive: true });
		await writeFile(path, route.markdown, 'utf-8');
	}

	// nginx map include: per-route token estimates
	const mapEntry = (uri: string, tokens: number) => `\t${uri.padEnd(32)} "${tokens}";`;

	const markdownMap = [
		'map $uri $markdown_tokens {',
		'\tdefault "";',
		...routes.map((r) => mapEntry(r.uri, estimateTokens(r.markdown))),
		'}',
		'',
		'map $uri $html_tokens {',
		'\tdefault "";',
		...routes.map((r) => mapEntry(r.uri, Math.ceil(r.htmlBytes / 4))),
		'}',
		''
	].join('\n');

	await writeFile(join(DIST, 'markdown-tokens.conf'), markdownMap, 'utf-8');

	console.log(`Generated ${routes.length} markdown routes + markdown-tokens.conf`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
