<script>
    import * as prismicH from '@prismicio/helpers';
    export let component;
</script>

<section class="info-card">
    <img src={prismicH.asImageSrc(component.data.image)} alt="" />
    <div class="content">
        <p>
            {@html prismicH.asHTML(component.data.content)}
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
        background: #d9d9d9;
        color: black;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }
    img {
        max-height: 60vh;
        box-shadow: 23px 22px 67px 0 rgba(0, 0, 0, 0.25);
    }
</style>
