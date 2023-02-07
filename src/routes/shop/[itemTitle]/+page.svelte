<script>
    import { page } from '$app/stores';
    import * as prismicH from '@prismicio/helpers';
    import LinkButton from '../../../components/LinkButton.svelte';
    export let data;

    let item;
    data.shop.data.body.forEach((slice) => {
        if (
            slice.primary.title[0].text ===
            $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1)
        )
            item = slice;
    });
</script>

<svelte:head>
    <title>BUY | {item.primary.title[0].text}</title>
    <meta name="description" content="Shop" />
</svelte:head>

<div class="row">
    <img src={prismicH.asImageSrc(item.primary.image)} alt="" />
    <div class="description">
        <h2>{item.primary.title[0].text}</h2>
        <div class="content">
            {@html prismicH.asHTML(item.primary.description)}
        </div>
        <span class="price">Price: €{item.primary.price}</span>
        <LinkButton
            path={item.primary.buy_link.url}
            text={item.primary.is_sold ? 'Sold out' : 'Purchase'}
            active={!item.primary.is_sold}
        />
    </div>
</div>

<style lang="scss">
    div.row {
        display: flex;
        justify-content: center;
        gap: 8rem;
        max-width: 90%;
        padding-block: 5rem;
        margin-inline: auto;

        @media only screen and (max-width: 900px) {
            width: fit-content;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            h2 {
                text-align: center;
            }
        }

        img {
            max-height: 60vh;
            width: fit-content;
        }

        span.price {
            display: block;
            font-size: 1.2em;
            font-weight: 300;

            margin-block: 1.2em;
        }
    }
</style>
