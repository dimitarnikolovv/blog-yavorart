<script>
    import * as prismicH from '@prismicio/helpers';
    import { SliceZone } from '@prismicio/svelte';
    import * as components from '$lib/slices';

    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="Gallery of my drawings" />
</svelte:head>

<div class="page-content">
    <h1>
        {data.document.data.page_title[0].text}
    </h1>

    {#if data.document.data.content[0].text != ''}
        <div class="content">
            {@html prismicH.asHTML(data.document.data.content)}
        </div>
    {/if}
</div>

<SliceZone slices={data.document.data.body} {components} />

<style lang="scss">
    div.page-content {
        z-index: 3;
        position: relative;
        margin-block-end: 3rem;
        h1 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.5em;
        }
        div.content {
            background-color: #73737312;
            padding: 1.5em;
            width: 100%;
        }
    }
</style>
