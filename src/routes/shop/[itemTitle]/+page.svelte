<script>
    import { page } from '$app/stores';
    import * as prismicH from '@prismicio/helpers';
    import LinkButton from '../../../components/LinkButton.svelte';
    import BackButton from '../../../components/BackButton.svelte';
    export let data;

    let item;
    data.shop.data.body.forEach((slice) => {
        if (
            slice.primary.url[0].text.toLowerCase() ===
            $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1).toLowerCase()
        )
            item = slice;
    });
</script>

<svelte:head>
    <title>BUY | {item.primary.title[0].text}</title>
    <meta name="description" content="Shop" />
</svelte:head>

<BackButton slot="back-button" scrollToID={item.primary.url[0].text} />

<div class="row">
    <img src={prismicH.asImageSrc(item.primary.image)} alt="" />
    <div class="description">
        <h2>{item.primary.title[0].text}</h2>
        <div class="content">
            {@html prismicH.asHTML(item.primary.description)}
        </div>
        {#if !item.primary.is_sold}
            <span class="price"
                >Price: €{item.primary.price != null ? item.primary.price : ' sold '}</span
            >
        {/if}
        <LinkButton
            path={item.primary.buy_link.url}
            text={item.primary.is_sold ? 'Sold out' : 'Purchase'}
            active={!item.primary.is_sold}
        />
    </div>
</div>

<style lang="scss">
    div.row {
        min-height: 81vh;
        max-width: 90%;
        display: flex;
        justify-content: center;
        gap: 8rem;
        padding-block: 5rem;
        margin-inline: auto;

        @media only screen and (max-width: 900px) {
            width: fit-content;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding-block: 2rem;

            h2 {
                text-align: center;
            }
        }

        img {
            max-height: 60vh;
            // width: fit-content;
        }

        span.price {
            display: block;
            font-size: 1.2em;
            font-weight: 300;

            margin-block: 1.2em;
        }
    }
</style>
