<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import ScrollToTop from '../components/ScrollToTop.svelte';
    import { onMount } from 'svelte';
    export let data;

    onMount(() => {
        document.body.style.setProperty('--theme-color', data.colors.data.theme_color);
        document.body.style.setProperty('--theme-accent-color', data.colors.data.accent_color);
        document.body.style.setProperty('--theme-off-color', data.colors.data.background_off_color);
        document.body.style.setProperty('--theme-text-color', data.colors.data.text_color);
        document.body.style.setProperty(
            '--theme-accent-text-color',
            data.colors.data.accent_text_color
        );
    });
</script>

<div class="app">
    <Header content={data.header} isShopActive={data.shop.data.is_active} />

    <main>
        <slot />
    </main>

    <ScrollToTop />

    <Footer />
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
        padding-block-start: var(--header-height);
        width: 100%;
        margin: 0 auto;
        color: var(--theme-text-color);
    }
</style>
