<script>
    export let data;
</script>

<div class="page-wrap">
    <h1>
        {data.shop.data.page_title[0].text}
    </h1>
    {#if data.shop.data.is_active}
        <slot name="back-button" />

        <slot />
    {:else}
        <div
            style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding-block-start: 5rem; padding-inline: 1.5rem;"
        >
            <h2>
                I am so sorry, but the shop is <span style="color:crimson">not active</span> at the moment.
            </h2>
            <p>It will be soon up and running. 👀</p>
        </div>
    {/if}
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
