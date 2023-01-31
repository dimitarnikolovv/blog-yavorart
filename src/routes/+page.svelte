<script>
  let isActive = false;
</script>

<svelte:head>
  <title>Blog | Yavor Art</title>
  <meta name="description" content="Yavor's blog" />
</svelte:head>

<div class="maskparent" class:active={isActive}>
  <img src="/images/garvan.jpg" alt="" aria-hidden="true" class="glow" />
  <img
    src="/images/garvan.jpg"
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

<style lang="scss">
  div.maskparent {
    position: relative;
    width: 500px;

    &.active {
      margin-inline: auto;
      height: 90vh;
      width: fit-content;

      img.image:hover {
        transform: none;
      }
    }
  }

  img.glow {
    position: absolute;
    z-index: 0;
    filter: blur(70px);
  }

  img.image {
    position: relative;
    z-index: 1;
    transition: transform 150ms ease-out;

    &:hover {
      transform: scale(1.02);
    }
  }
</style>
