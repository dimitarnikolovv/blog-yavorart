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
    }

    .disabled {
        pointer-events: none;
    }
    a {
        color: white;
        background-color: black;
        border: 2px solid white;
        transition: all 150ms ease-in;

        padding: 0.5em 1.5em;
        font-size: 1.2em;
        font-weight: 600;
        text-transform: uppercase;

        &:hover {
            color: black;
            background-color: white;
            border-color: black;
        }
    }
</style>
