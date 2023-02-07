<script>
    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.shop.data.page_title[0].text}</title>
    <meta name="description" content="Shop" />
</svelte:head>

<div class="page-wrap">
    <h1>
        {data.shop.data.page_title[0].text}
    </h1>

    <slot />
</div>

<style lang="scss">
    div.page-wrap {
        background: #d9d9d9;
        color: black;
    }
    h1 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding-block-end: 0.5em;
        box-shadow: 0 8px 10px rgba(183, 183, 183, 0.333);
    }
</style>
