<script>
    export let data;
</script>

<div class="page-wrap">
    <h1>
        {data.shop.data.page_title[0].text}
    </h1>
    <slot name="back-button" />

    <slot />
</div>

<style lang="scss">
    div.page-wrap {
        position: relative;
        background: var(--theme-off-color);
        color: var(--theme-color);
    }
    h1 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding-block-end: 0.5em;
        box-shadow: 0 8px 10px rgba(183, 183, 183, 0.333);
    }
</style>
