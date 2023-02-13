<script>
    export let slice;

    const pdfLink = slice.primary.sketchbook_file.url;
    const apiKey = '05aee1f33099441a'; //TODO move to .env

    let flipbook;

    (async function getFlipbook() {
        const req = await fetch(`https://heyzine.com/api1/rest?pdf=${pdfLink}&k=${apiKey}`);
        flipbook = await req.json();
    })();
</script>

<pre>SLICE DATA: {JSON.stringify(slice, null, 2)}</pre>

<!-- BUG Displays https://heyzine.com home page -->

<!-- {#if flipbook && (flipbook?.state == 'processed' ?? false)} -->
{#if flipbook}
    <pre>FLIPBOOK DATA: {JSON.stringify(flipbook, null, 2)}</pre>

    <iframe title="sketchbook" src={flipbook.url} frameborder="0" />
{/if}

<style lang="scss">
    iframe {
        width: 100%;
        height: 75vh;
    }
</style>
