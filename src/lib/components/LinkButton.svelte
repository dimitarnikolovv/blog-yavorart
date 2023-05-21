<script>
    export let theme = 'light';
    export let text = '';
    export let path = '/';
    export let active = true;
</script>

<div class="link-button">
    <a prefetch href={active ? path : '#'} class:dark={theme === 'dark'} class:disabled={!active}>
        {text}
    </a>
</div>

<style lang="scss">
    div.link-button {
        margin-inline: auto;
        margin-block: 1.5em;
    }

    .disabled {
        pointer-events: none;
    }
    a {
        --link-text-color: var(--theme-text-color);
        --link-background-color: var(--theme-color);

        color: var(--link-text-color);
        background-color: var(--link-background-color);
        border: 2px solid var(--link-text-color);
        transition: all 150ms ease-in;

        padding: 0.5em 1.5em;
        font-size: 1.2em;
        font-weight: 600;
        text-transform: uppercase;

        &:hover {
            --link-text-color: var(--theme-accent-text-color);
            --link-background-color: var(--theme-accent-color);
        }
    }
</style>
