<script>
    import * as prismicH from '@prismicio/helpers';
    import { goto } from '$app/navigation';
    export let slice;

    function redirectToItemPage() {
        goto(`/shop/${slice.primary.url[0].text.toLowerCase()}`);
    }
</script>

<div class="image-wrap" on:click={redirectToItemPage} on:keypress={redirectToItemPage}>
    <img src={prismicH.asImageSrc(slice.primary.image)} alt="" />
    {#if slice.primary.is_sold}
        <div class="sold">Sold</div>
    {/if}
</div>

<style lang="scss">
    div.image-wrap {
        margin-block: 3rem;
        margin-block-end: 8rem;
        position: relative;
        width: fit-content;
        margin-inline: auto;
        cursor: pointer;

        @media only screen and (max-width: 900px) {
            margin-inline: 5%;
        }

        img {
            max-height: 70vh;
            box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.273);
        }

        div.sold {
            position: absolute;
            right: 0;
            top: 2rem;
            background-color: rgb(0, 0, 0, 0.85);
            color: white;
            font-size: 1.8rem;
            text-transform: uppercase;
            padding: 0.3em 1em;
        }
    }
</style>
