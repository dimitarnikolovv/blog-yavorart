<script>
    import Header from '../components/Header.svelte';
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        padding-block-start: 5rem;
        width: 100%;
        margin: 0 auto;
        color: var(--main-theme-text-color);
    }
</style>
