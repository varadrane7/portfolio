import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// If you want to output to "dist", you can specify:
			pages: 'dist', // default is "build"
			assets: 'dist', // default is also "build"
			fallback: 'index.html'
			// ^ fallback can be "index.html" if you're building a single-page app (SPA)
			//   so that unknown routes are served the main index.
			//   Alternatively, you could use "404.html" if you want a custom 404
			//   but for SvelteKit SPAs, "index.html" is often convenient.
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		}
	}
};

export default config;
