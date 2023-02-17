<script>
    import { SliceZone } from '@prismicio/svelte';
    import * as components from '$lib/slices';

    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.shop.data.page_title[0].text}</title>
    <meta name="description" content="Shop" />
</svelte:head>

<SliceZone slices={data.shop.data.body} {components} />
