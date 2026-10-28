import ResumeData, { getResumeVariant } from '$lib/data/resume';

export function load({ params, url }: { params: Record<string, string>; url: URL }) {
	// Supports /resume, /resume/<id> and /resume?type=<id>
	const requested = params.variant ?? url.searchParams.get('type');
	const variant = getResumeVariant(requested);

	return {
		variant: variant ?? ResumeData.defaultVariant,
		notFound: Boolean(requested) && !variant
	};
}
