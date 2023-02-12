<script>
    import * as prismicH from '@prismicio/helpers';
    import { goto } from '$app/navigation';
    export let slice;

    function redirectToItemPage() {
        goto(`/shop/${slice.primary.url[0].text.toLowerCase()}`);
    }
</script>

<!-- <pre>{JSON.stringify(slice, null, 2)}</pre> -->

<section
    aria-label={slice.primary.title[0].text}
    class="image-wrap"
    id={slice.primary.url[0].text}
    on:click={redirectToItemPage}
    on:keypress={redirectToItemPage}
>
    <img src={prismicH.asImageSrc(slice.primary.image)} alt="" />
    {#if slice.primary.is_sold}
        <div class="sold">Sold</div>
    {/if}
</section>

<style lang="scss">
    section.image-wrap {
        --padding-block: calc(var(--header-height) + 0.5rem);
        padding-block: var(--padding-block);
        margin-block-end: 1rem;
        position: relative;
        width: fit-content;
        margin-inline: auto;
        cursor: pointer;

        @media only screen and (max-width: 900px) {
            max-width: 90%;
        }

        img {
            max-height: 72vh;
            box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.273);
        }

        div.sold {
            position: absolute;
            right: 0;
            top: calc(var(--padding-block) + 2rem);
            background-color: rgb(0, 0, 0, 0.85);
            color: white;
            font-size: 1.8rem;
            text-transform: uppercase;
            padding: 0.3em 1em;
        }
    }
</style>
