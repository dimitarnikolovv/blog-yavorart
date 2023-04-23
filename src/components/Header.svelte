<script>
    import * as prismicH from '@prismicio/helpers';
    import Navigation from './Navigation.svelte';

    export let content;
    export let isShopActive;
</script>

<header>
    <a href="/" class="logo">
        <img src={prismicH.asImageSrc(content.data.logo)} alt="" />
        <span> Yavor's art </span>
    </a>

    <Navigation navigation={content.data.navigation} {isShopActive} />
</header>

<style lang="scss">
    header {
        z-index: 100;
        position: fixed;
        width: 100%;
        color: white;
        text-transform: uppercase;
        background-color: rgba(16, 16, 16, 0.3);
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 5%;

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            height: 100%;
            img {
                max-height: 70%;
            }
            span {
                font-weight: 700;
                font-size: 1.6rem;
            }
        }
    }
</style>
