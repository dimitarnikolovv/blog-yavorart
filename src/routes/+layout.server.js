import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const client = createClient({ fetch, request });
    const header = await client.getSingle('header');

    if (header) {
        return { header };
    }

    error(404, 'Not found');
}
