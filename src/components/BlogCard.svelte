<script>
    export let imageUrl;
    let isActive = false;
</script>

<article class:active={isActive}>
    <div class="description">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, suscipit voluptates.
            Minima exercitationem deserunt illum vero minus, repellendus amet. Neque dolores aperiam
            doloribus animi quasi voluptatibus explicabo soluta laudantium totam?
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, veniam
            reprehenderit! Temporibus perspiciatis iste corporis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis deserunt nostrum
            quas, alias ea consequatur, repellendus nemo aperiam vitae esse, ad incidunt laborum
            blanditiis.
        </p>
    </div>
    <div class="maskparent" class:active={isActive}>
        <img src={imageUrl} alt="" aria-hidden="true" class="glow" />
        <img
            src={imageUrl}
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
    article {
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

            margin-block: 4rem;

            gap: 3rem;

            div.maskparent {
                max-width: 100%;
                margin-inline: auto;
            }
        }
    }

    div.description {
        background-color: #73737312;
        padding: 1.5em;
    }

    div.maskparent {
        position: relative;

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
