<script>
    import * as prismicH from '@prismicio/helpers';
    export let post;
    let isActive = false;
</script>

<article class:active={isActive}>
    <div class="description">
        <div class="content">
            {@html prismicH.asHTML(post.data.content)}
            <!-- <span class="date"
                >Date: {new Date(post.last_publication_date).toLocaleDateString('bg')}</span
            > -->
        </div>
    </div>
    <div class="maskparent" class:active={isActive}>
        <img src={prismicH.asImageSrc(post.data.image)} alt="" aria-hidden="true" class="glow" />
        <img
            src={prismicH.asImageSrc(post.data.image)}
            alt=""
            class="image"
            on:click={() => {
                isActive = !isActive;
            }}
            on:keypress={() => {
                isActive = !isActive;
            }}
        />
    </div>
</article>

<style lang="scss">
    // span.date {
    //     font-size: 0.8rem;
    // }
    article {
        isolation: isolate;
        width: 90%;
        margin-inline: auto;
        margin-block: 6rem;

        display: flex;

        &.active {
            div.description {
                display: none;
            }
        }

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
            flex-flow: column-reverse;
            gap: 3rem;
            margin-block: 4rem;

            div.maskparent {
                max-width: 100%;
                margin-inline: auto;
            }
        }
    }

    div.description {
        z-index: 3;
        background-color: #73737312;
        padding: 1.5em;
        width: 100%;
    }

    div.maskparent {
        position: relative;
        height: fit-content;
        align-self: center;

        &.active {
            --fullscreen-height: 90vh;

            margin-inline: auto;
            max-height: var(--fullscreen-height);
            width: fit-content;
            max-width: unset;

            img {
                max-height: var(--fullscreen-height);
                max-width: 100%;
            }

            img.image:hover {
                transform: none;
            }
        }
    }

    img {
        max-height: 350px;
        max-width: fit-content;

        @media only screen and (max-width: 728px) {
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
        transition: transform 150ms ease-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.02);
        }
    }
</style>
