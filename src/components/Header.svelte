<script>
  import { page } from "$app/stores";
</script>

<header>
  <div class="logo">
    <a href="/"> Yavor's art </a>
  </div>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/" class:active={$page.url.pathname === "/" ? true : false}
          >Home</a
        >
      </li>
      <li aria-current={$page.url.pathname === "/gallery" ? "page" : undefined}>
        <a
          href="/gallery"
          class:active={$page.url.pathname === "/gallery" ? true : false}
          >Gallery</a
        >
      </li>
      <li aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
        <a
          href="/contact"
          class:active={$page.url.pathname === "/contact" ? true : false}
          >Contact me</a
        >
      </li>
      <li aria-current={$page.url.pathname === "/shop" ? "page" : undefined}>
        <a
          href="/shop"
          class:active={$page.url.pathname === "/shop" ? true : false}>Shop</a
        >
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    z-index: 100;
    position: fixed;
    width: 100%;
    color: var(--main-theme-text-color);
    text-transform: uppercase;
    background-color: rgba(16, 16, 16, 0.3);
    height: 4.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 8%;

    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    .logo {
      a {
        font-weight: 700;
        font-size: 1.6rem;
      }
    }
  }

  nav {
    font-size: 1.2rem;
    ul {
      display: flex;
      gap: 2.2rem;
    }

    a {
      border-radius: 0.4em;
      padding: 0.2em 0.6em;
      transition: outline 150ms ease-in-out;

      &:hover,
      &.active {
        outline: 2px solid var(--main-theme-text-color);
      }
    }
  }
</style>
