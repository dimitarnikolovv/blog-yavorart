<script>
    import Header from '../components/Header.svelte';
    import ScrollToTop from '../components/ScrollToTop.svelte';
    export let data;
</script>

<div class="app">
    <Header menu={data.menu} />

    <main>
        <slot />
    </main>

    <ScrollToTop />
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-block-start: 4.2rem;
        padding-block-end: 6rem;
        width: 100%;
        margin: 0 auto;
        color: var(--main-theme-text-color);

        @media only screen and (max-width: 900px) {
            padding-block-end: 3rem;
        }
    }
</style>
