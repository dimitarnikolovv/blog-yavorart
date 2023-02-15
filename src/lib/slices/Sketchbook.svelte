<script>
    import { error } from '@sveltejs/kit';

    export let slice;

    const pdfLink =
        slice.primary.sketchbook_file.url +
        `?v${encodeURIComponent(slice.primary.sketchbook_file.size)}`;

    const apiKey = '05aee1f33099441a';

    let flipbook;

    (async function getFlipbook() {
        const req = await fetch(
            `https://heyzine.com/api1/async?pdf=${encodeURIComponent(
                pdfLink
            )}&k=${encodeURIComponent(apiKey)}&tpl=333fc4ccd6ad4cd5879f40198dbeeb764e5f1de7.pdf`
        );
        if (req.ok) flipbook = await req.json();
        else error(503, 'A problem occurred getting the sketchbook. Please refresh this page :)');
    })();
</script>

<div>
    {#if flipbook && (flipbook?.state === 'processed' ?? false)}
        <iframe title="sketchbook" src={flipbook.url} frameborder="0" />
    {:else}
        <div class="loader">Loading Content...</div>
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        font-size: 1.4rem;
    }
    iframe {
        border-radius: 3rem;
        width: 100%;
        height: 75vh;

        @media only screen and (max-width: 780px) {
            width: 95%;
        }
    }
</style>
