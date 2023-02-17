<script>
    import * as prismicH from '@prismicio/helpers';
    import { goto } from '$app/navigation';
    export let slice;

    function redirectToItemPage() {
        goto(`/shop/${slice.primary.url[0].text.toLowerCase()}`);
    }
</script>

<section aria-label={slice.primary.title[0].text} class="image-wrap" id={slice.primary.url[0].text}>
    <button
        on:click={redirectToItemPage}
        aria-label="Go to purchase page for {prismicH.asText(slice.primary.title)}"
    >
        <img src={prismicH.asImageSrc(slice.primary.image)} alt={slice.primary.image.alt} />
        {#if slice.primary.is_sold}
            <div class="sold">Sold</div>
        {/if}
    </button>
</section>

<style lang="scss">
    section.image-wrap {
        --padding-block: calc(var(--header-height) + 0.5rem);
        &:first-of-type {
            --padding-block: calc(3rem);
        }

        padding-block: var(--padding-block);
        position: relative;
        width: fit-content;
        margin-inline: auto;

        @media only screen and (max-width: 900px) {
            max-width: 90%;
        }

        img {
            max-height: 75vh;
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
