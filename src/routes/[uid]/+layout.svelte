<script>
    import { Modals, closeModal } from 'svelte-modals';
</script>

<div class="wrapper">
    <slot />
</div>

<Modals>
    <div slot="backdrop" class="backdrop" on:click={closeModal} on:keydown={closeModal} />
</Modals>

<style>
    div.wrapper {
        padding-inline: 5%;
    }
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
