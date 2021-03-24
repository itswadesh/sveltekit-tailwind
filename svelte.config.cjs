const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		adapter:{
			adapt(){
node()
			}
		} 
	}
};
