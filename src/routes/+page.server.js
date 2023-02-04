import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const homepageUID = 'home'; // Update for the UID of your homepage
    const client = createClient({ fetch, request });

    const document = await client.getByUID('page', homepageUID);
    const portfolio = await client.getSingle('portfolio');
    const blogPosts = await client.getAllByType('blog_post');

    if (document && portfolio && blogPosts) {
        return { document, portfolio, blogPosts };
    }

    error(404, 'Not found');
}
