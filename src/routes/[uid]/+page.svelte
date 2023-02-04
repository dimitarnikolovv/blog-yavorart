<script>
    import * as prismicH from '@prismicio/helpers';
    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="Gallery of my drawings" />
</svelte:head>

{@html prismicH.asHTML(data.document.data.content)}
