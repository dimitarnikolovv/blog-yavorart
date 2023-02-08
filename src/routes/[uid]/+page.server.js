import { error } from '@sveltejs/kit';
import createClient from '$lib/prismicio';

export async function load({ fetch, params, request }) {
    const { uid } = params;
    const client = createClient({ fetch, request });
    const document = await client.getByUID('page', uid);

    if (document) {
        return { document };
    }

    error(404, 'Not found');
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const data = {
            service_id: 'contact_form_service',
            template_id: 'contact_form_template',
            user_id: 'nW3Juf-Lr59vmcQUs',
            accessToken: 'e7doLpaw7ubb5r6U8SdJj',
            template_params: {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
            },
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.status == 200)
            return {
                success: true,
            };
    },
};
