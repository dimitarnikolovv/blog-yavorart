import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({}),
    kit: {
        adapter: adapter(),
        csrf: {
            checkOrigin: true,
        },
    },
};

export default config;
