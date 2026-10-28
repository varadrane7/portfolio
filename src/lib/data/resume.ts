import { href } from '$lib/utils';

const title = 'Resumé';

export type ResumeVariant = {
	/** URL-safe id, used in /resume/<id> and as the WebMCP / agent parameter */
	id: string;
	/** Short label shown on the tab */
	label: string;
	/** Longer label used in page titles and agent descriptions */
	name: string;
	/** One-line summary of what this resume emphasises */
	description: string;
	/** Path of the PDF relative to static/ (and dist/) */
	file: string;
	/** Public URL of the PDF */
	pdf: string;
	/** Public URL of this variant's page */
	page: string;
};

const variant = (v: Omit<ResumeVariant, 'pdf' | 'page'>): ResumeVariant => ({
	...v,
	pdf: href(`/${v.file}`),
	page: href(`/resume/${v.id}`)
});

// Max 3 variants. PDFs live in static/pdf/.
const variants: Array<ResumeVariant> = [
	variant({
		id: 'sde',
		label: 'SDE',
		name: 'Software Development Engineer',
		description: 'Backend / full-stack software engineering focus.',
		file: 'pdf/resume_sde.pdf'
	}),
	variant({
		id: 'cloud',
		label: 'Cloud',
		name: 'Cloud / Platform Engineer',
		description: 'Cloud infrastructure, DevOps and platform engineering focus.',
		file: 'pdf/resume_cloud.pdf'
	}),
	variant({
		id: 'net',
		label: '.NET',
		name: '.NET Developer',
		description: 'C# / ASP.NET / .NET ecosystem focus.',
		file: 'pdf/resume_net.pdf'
	})
];

const defaultVariant = variants[0];

export const getResumeVariant = (id?: string | null): ResumeVariant | undefined =>
	id ? variants.find((v) => v.id === id.toLowerCase()) : undefined;

const ResumeData = {
	title,
	variants,
	defaultVariant,
	/** @deprecated kept for backwards compatibility – points at the default variant's PDF */
	resume: defaultVariant.pdf
};

export default ResumeData;
