<script>
    import * as prismicH from '@prismicio/helpers';
    export let slice;
</script>

<section class="info-card">
    <img src={prismicH.asImageSrc(slice.primary.image)} alt="" />
    <div class="content">
        <p>
            {@html prismicH.asHTML(slice.primary.description)}
        </p>
    </div>
</section>

<style lang="scss">
    section.info-card {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        padding-inline: 5%;
        padding-block: 5rem;
        min-height: calc(100vh - var(--header-height));
        background: var(--theme-off-color);
        color: var(--theme-accent-text-color);

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }
    img {
        max-height: 60vh;
        box-shadow: 23px 22px 67px 0 rgba(0, 0, 0, 0.25);
    }
</style>
