<script>
    import { SliceZone } from '@prismicio/svelte';
    import * as components from '$lib/slices';

    export let data;
</script>

<SliceZone slices={data.shop.data.body} {components} />
