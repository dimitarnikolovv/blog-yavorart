<script>
    import * as prismicH from '@prismicio/helpers';

    export let slice;
</script>

<div class="row">
    {#each slice.items as item}
        <div class="maskparent">
            <img src={prismicH.asImageSrc(item.image)} alt="" aria-hidden="true" class="glow" />
            <img src={prismicH.asImageSrc(item.image)} alt="" class="image" />
        </div>
    {/each}
</div>

<style lang="scss">
    div.row {
        display: flex;
        justify-content: space-between;
        gap: 5rem;

        max-width: 90%;

        margin-inline: auto;
        margin-block-end: 15rem;

        @media only screen and (max-width: 1190px) {
            gap: 5vw;
        }

        @media only screen and (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
            gap: 15rem;
            max-width: fit-content;
        }

        div.maskparent {
            position: relative;
            &:only-child {
                margin-inline: auto;
            }
        }

        img {
            max-height: 75vh;

            @media only screen and (max-width: 1000px) {
                max-width: 100%;
            }
        }

        img.glow {
            position: absolute;
            z-index: 0;
            filter: blur(70px) saturate(3);
        }

        img.image {
            position: relative;
            z-index: 1;
        }
    }
</style>
