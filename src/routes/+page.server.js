import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
    const homepageUID = 'home'; // Update for the UID of your homepage
    const client = createClient({ fetch, request });

    const document = async () => {
        return await client.getByUID('page', homepageUID);
    };

    const blogPosts = async () => {
        return await client.getAllByType('blog_post');
    };

    if ((await document()) && (await blogPosts())) {
        return {
            document: document(),
            blogPosts: blogPosts(),
        };
    }

    error(404, 'Not found');
}
