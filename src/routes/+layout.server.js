import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const client = createClient({ fetch, request });

    const header = async () => {
        return await client.getSingle('header');
    };

    const shop = async () => {
        return await client.getSingle('shop');
    };

    const colors = async () => {
        return await client.getSingle('color_theme');
    };

    if ((await header()) && (await colors())) {
        return {
            colors: colors(),
            header: header(),
            shop: shop(),
        };
    }

    error(404, 'Not found');
}
