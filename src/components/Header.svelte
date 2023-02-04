<script>
    import Navigation from './Navigation.svelte';
</script>

<header>
    <div class="logo">
        <a href="/"> Yavor's art </a>
    </div>

    <Navigation />
</header>

<style lang="scss">
    header {
        z-index: 100;
        position: fixed;
        width: 100%;
        color: var(--main-theme-text-color);
        text-transform: uppercase;
        background-color: rgba(16, 16, 16, 0.3);
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 5%;

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        .logo {
            a {
                font-weight: 700;
                font-size: 1.6rem;
            }
        }
    }
</style>
