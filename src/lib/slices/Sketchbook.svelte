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
            )}&k=${encodeURIComponent(apiKey)}`
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
        background-color: white;
        border-radius: 3rem;
        width: 100%;
        height: 75vh;
    }
</style>
