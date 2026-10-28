<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import ResumeData, { getResumeVariant } from '$lib/data/resume';

	let { children } = $props();

	onMount(() => {
		// WebMCP: expose portfolio navigation tools to AI agents
		if ('modelContext' in navigator && typeof (navigator as any).modelContext?.provideContext === 'function') {
			(navigator as any).modelContext.provideContext({
				tools: [
					{
						name: 'navigate_to_projects',
						description: 'Navigate to the projects page listing all of Varad Rane\'s software projects.',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: () => { window.location.href = '/projects'; }
					},
					{
						name: 'navigate_to_experience',
						description: 'Navigate to the experience page showing Varad Rane\'s professional work history.',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: () => { window.location.href = '/experience'; }
					},
					{
						name: 'navigate_to_skills',
						description: 'Navigate to the skills page listing Varad Rane\'s technical skills.',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: () => { window.location.href = '/skills'; }
					},
					{
						name: 'navigate_to_education',
						description: 'Navigate to the education page showing Varad Rane\'s academic background.',
						inputSchema: { type: 'object', properties: {}, required: [] },
						execute: () => { window.location.href = '/education'; }
					},
					{
						name: 'navigate_to_resume',
						description: 'Navigate to one of Varad Rane\'s resumes. Versions: "sde" (Software Development Engineer, default), "cloud" (Cloud / Platform Engineer), "net" (.NET Developer).',
						inputSchema: {
							type: 'object',
							properties: {
								variant: {
									type: 'string',
									enum: ResumeData.variants.map((v) => v.id),
									description: 'Which resume to open. Defaults to "sde".'
								}
							},
							required: []
						},
						execute: (args?: { variant?: string }) => {
							const v = getResumeVariant(args?.variant) ?? ResumeData.defaultVariant;
							window.location.href = v.page;
						}
					}
				]
			});
		}
	});
</script>

<ModeWatcher />
<div class="flex h-screen w-screen flex-col overflow-x-hidden">
	<NavBar />
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
</div>
