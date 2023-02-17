<script>
    import { closeModal } from 'svelte-modals';

    // provided by <Modals />
    export let isOpen;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <div class="svg-wrap">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M21.5 4h-19A1.504 1.504 0 0 0 1 5.5v13A1.5 1.5 0 0 0 2.5 20h19a1.5 1.5 0 0 0 1.5-1.5v-13A1.504 1.504 0 0 0 21.5 4zM12 12.07L2.82 5h18.36zm-2.846-.93L2 18.292V5.631zm.798.615L12 13.33l2.048-1.576L21.293 19H2.707zm4.894-.616L22 5.631v12.662z"
                    /><path fill="none" d="M0 0h24v24H0z" /></svg
                >
            </div>
            <div class="text">
                <h3>Thanks!</h3>
                <p>Your message has been sent.</p>
            </div>

            <button on:click={closeModal}>Close</button>
        </div>
    </div>
{/if}

<style lang="scss">
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        position: relative;
        color: var(--theme-accent-text-color);
        width: 450px;
        max-width: 100%;
        padding-block: 2rem;
        background: var(--theme-accent-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: auto;
        text-transform: uppercase;
        border-radius: 1rem;

        .svg-wrap {
            max-height: 150px;
            max-width: 150px;
            svg {
                height: 150px;
                width: 150px;
            }
        }

        .text {
            text-align: center;
        }

        h3 {
            font-weight: 400;
            font-size: 1.6rem;
        }
    }

    button {
        position: absolute;
        top: 0.8rem;
        right: 1rem;

        background-color: transparent;
        color: var(--theme-accent-text-color);
        cursor: pointer;
        border: none;
        text-transform: inherit;
    }
</style>
