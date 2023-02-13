<script>
    export let slice;

    const pdfLink = slice.primary.sketchbook_file.url;
    const apiKey = '05aee1f33099441a';

    let flipbook;

    async function load() {
        const req = await fetch(
            `https://heyzine.com/api1/async?pdf=${pdfLink}&k=${apiKey}&tpl=c683c9059ed66a5d378c3489b0bf221f29b043d4.pdf`
        );
        flipbook = await req.json();
    }
    load();
</script>

{#if flipbook}
    <iframe title="sketchbook" src={flipbook.url} frameborder="0" />
{/if}

<style lang="scss">
    iframe {
        width: 100%;
        height: 75vh;
        max-height: 75vh;
    }
</style>
