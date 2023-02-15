<script>
    import { page } from '$app/stores';
    export let navigation;
    let isOpen = false;
    function handleLinkClick() {
        isOpen = false;
    }
</script>

<nav class:open={isOpen}>
    <button
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
            <li aria-current={$page.url.pathname === navLink.linked_page.url ? 'page' : undefined}>
                <a prefetch href={navLink.linked_page.url} on:click={handleLinkClick}
                    >{navLink.linked_page.uid}</a
                >
            </li>
        {/each}
        <li aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
            <a prefetch href="/shop" on:click={handleLinkClick}>Shop</a>
        </li>
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
                    border: 2px solid var(--main-theme-text-color);
                }
            }
        }

        button {
            --button-size: 2.4rem;
            display: none;
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
                width: 90%;
                border: 1px solid white;
                margin-inline: auto;

                transition: transform 150ms ease;
            }

            div:nth-child(1) {
                margin-block-start: calc(var(--button-size) / 3 - 2 * 2px - 1px);
            }

            @media only screen and (max-width: 950px) {
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

        @media only screen and (max-width: 950px) {
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
