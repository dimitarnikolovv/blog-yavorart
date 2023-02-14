<script>
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
            )}&k=${encodeURIComponent(apiKey)}&tpl=7f1b28733fc1fe33bac75a1219b8069ff9b59a1a.pdf`
        );
        flipbook = await req.json();
    })();
</script>

<div>
    {#if flipbook && (flipbook?.state == 'processed' ?? false)}
        <iframe title="sketchbook" src={flipbook.url} frameborder="0" />
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    iframe {
        width: 100%;
        height: 75vh;
        @media only screen and (max-width: 780px) {
            width: 90%;
        }
    }
</style>
