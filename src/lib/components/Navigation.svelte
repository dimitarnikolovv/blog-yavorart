<script>
    import { page } from '$app/stores';
    import * as prismicH from '@prismicio/helpers';
    export let navigation;
    export let isShopActive;

    let isOpen = false;
    function handleLinkClick() {
        isOpen = false;
    }
</script>

<nav class:open={isOpen}>
    <button
        aria-label="Toggle navigation"
        on:click={() => {
            isOpen = !isOpen;
        }}
    >
        <div />
        <div />
        <div />
    </button>
    <ul>
        {#each navigation as navLink}
            <li aria-current={$page.url.pathname === navLink.link.url ? 'page' : undefined}>
                <a prefetch href={navLink.link.url} on:click={handleLinkClick}
                    >{prismicH.asText(navLink.display_name)}</a
                >
            </li>
        {/each}
        {#if isShopActive}
            <li aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
                <a prefetch href="/shop" on:click={handleLinkClick}>Shop</a>
            </li>
        {/if}
    </ul>
</nav>

<style lang="scss">
    nav {
        font-size: 1.2rem;

        ul {
            display: flex;
            gap: 2.2rem;
        }

        li {
            a {
                border: 2px solid transparent;
                border-radius: 0.4em;
                padding: 0.2em 0.6em;
                transition: border 150ms ease-in-out;
            }
            &:hover,
            &[aria-current='page'] {
                a {
                    border: 2px solid white;
                }
            }
        }

        button {
            --button-size: 2.4rem;
            display: none;
            cursor: pointer;
            flex-direction: column;
            gap: 0.4rem;
            margin-inline-start: calc(100% - (var(--button-size) * 1.5) - 4px);
            width: var(--button-size);
            height: var(--button-size);
            background-color: transparent;
            margin-block: calc(var(--header-height) / 4.8);

            border: 2px solid white;
            border-radius: 0.4rem;

            div {
                width: 60%;
                border: 1px solid white;
                margin-inline: auto;

                transition: transform 150ms ease;
            }

            div:nth-child(1) {
                margin-block-start: calc(var(--button-size) / 3 - 2 * 2px - 1px);
            }

            @media only screen and (max-width: 1060px) {
                display: flex;
            }
        }

        &.open {
            button {
                div:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                div:nth-child(2) {
                    display: none;
                }
                div:nth-child(3) {
                    transform: rotate(-45deg) translateY(10%);
                }
            }
        }

        @media only screen and (max-width: 1060px) {
            position: absolute;
            right: 0;
            top: 0;
            height: var(--header-height);
            width: fit-content;

            ul {
                transform: translateX(120%);
                transition: transform 150ms ease-in-out;
                align-items: center;
                position: relative;
                flex-direction: column;
                margin-block-start: 0;
                padding: 3rem 4rem;
                background-color: rgba(16, 16, 16, 0.85);
            }
            &.open {
                ul {
                    transform: translateX(0);
                }
            }
        }
    }
</style>
