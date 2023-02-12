<script>
    export let slice;
</script>

<iframe
    src={slice.primary.sketchbook_file.url}
    title="Take a look inside my sketchbook"
    frameborder="0"
/>

<pre>{JSON.stringify(slice, null, 2)}</pre>

<style lang="scss">
    iframe {
        width: 80%;
        height: 70vh;
        margin-inline: auto;
    }
</style>
