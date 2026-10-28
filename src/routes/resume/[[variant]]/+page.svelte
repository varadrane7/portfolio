<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import ResumeData, { type ResumeVariant } from '$lib/data/resume';
	import { cn } from '$lib/utils';

	let { data }: { data: { variant: ResumeVariant; notFound: boolean } } = $props();

	let current = $derived(data.variant);
	let title = $derived(`${ResumeData.title} – ${current.label}`);
</script>

<TitledPage {title}>
	<nav class="mx-auto flex flex-wrap justify-center gap-2" aria-label="Resume versions">
		{#each ResumeData.variants as v (v.id)}
			<a
				href={v.page}
				title={v.name}
				aria-current={v.id === current.id ? 'page' : undefined}
				class={cn(buttonVariants({ variant: v.id === current.id ? 'default' : 'outline' }), 'min-w-24')}
			>
				{v.label}
			</a>
		{/each}
	</nav>

	{#if data.notFound}
		<p class="text-center text-sm text-muted-foreground">
			That resume version doesn't exist – showing {current.label} instead.
		</p>
	{/if}

	<p class="text-center text-sm text-muted-foreground">{current.name} · {current.description}</p>

	<div class="mx-auto flex flex-wrap justify-center gap-2">
		<a href={current.pdf} download>
			<Button>Download {current.label} resume</Button>
		</a>
		<!-- Most mobile browsers can't render a PDF inside an iframe, so offer a full-screen open instead -->
		<a href={current.pdf} target="_blank" rel="noopener" class="md:hidden">
			<Button variant="outline">Open PDF</Button>
		</a>
	</div>

	{#key current.id}
		<iframe
			src={current.pdf}
			class="hidden h-full min-h-[80vh] w-full md:block"
			title={`${current.name} resume`}
		></iframe>
	{/key}
</TitledPage>
