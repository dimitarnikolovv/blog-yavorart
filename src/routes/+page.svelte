<script>
    import { SliceZone } from '@prismicio/svelte';
    import * as components from '$lib/slices';

    import LinkButton from '../components/LinkButton.svelte';

    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="Yavor's blog" />
</svelte:head>

<SliceZone slices={data.document.data.body} {components} />

<LinkButton path="/gallery" text="Go to gallery" theme="light" />
