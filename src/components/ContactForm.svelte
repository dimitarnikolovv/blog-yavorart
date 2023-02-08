<script>
    import { enhance, applyAction } from '$app/forms';
    export let form;
    let textContent = '';
</script>

<div>
    <form
        method="POST"
        use:enhance={({ form }) => {
            // Before form submission to server
            return async ({ result, update }) => {
                // After form submission to server
                if (result.type === 'success') {
                    form.reset();
                }
                if (result.type === 'invalid') {
                    await applyAction(result);
                }
                update();
            };
        }}
    >
        <label class="visually-hidden" for="name">Full name</label>
        <input
            type="text"
            aria-label="name"
            name="name"
            id="name"
            placeholder="Full Name"
            required
        />
        <label class="visually-hidden" for="email">Email</label>
        <input
            type="email"
            aria-label="email"
            name="email"
            id="email"
            placeholder="Email"
            required
        />
        <label class="visually-hidden" for="subject">Subject</label>
        <input
            type="text"
            aria-label="subject"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
        />
        <label class="visually-hidden" for="message">Your message</label>
        <textarea
            bind:value={textContent}
            name="message"
            aria-label="message"
            id="message"
            placeholder="Write your message here."
            rows="8"
            required
        />
        {#if textContent?.length > 5}
            <button type="submit">Send</button>
        {/if}
    </form>
</div>

<style lang="scss">
    div {
        width: 100%;
        padding-inline: 5rem;

        @media only screen and (max-width: 1170px) {
            padding-inline: 0;
        }
    }
    form {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    input,
    textarea {
        background-color: #ffffff;
        border: none;
        border-radius: 0.5rem;
        min-height: 3rem;
        padding-inline: 0.8em;
        padding-block: 0.6em;
        resize: none;
    }

    button {
        cursor: pointer;
        position: absolute;
        bottom: 0.8rem;
        right: 0.8rem;
        background-color: black;
        color: white;
        padding: 0.2em 1.2em;
        border-radius: 20rem;
        text-transform: uppercase;
        border: none;
    }
</style>
