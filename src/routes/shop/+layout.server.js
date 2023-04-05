import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const client = createClient({ fetch, request });
    const shop = await client.getSingle('shop');

    if (shop) {
        return { shop };
    }

    error(404, 'Not found');
}
