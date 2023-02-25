<script>
    import { fly } from 'svelte/transition';

    export let showOnPx = 250;
    let hidden = true;

    function goTop() {
        document.body.scrollIntoView();
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }
</script>

<svelte:window on:scroll={handleOnScroll} />

{#if !hidden}
    <button on:click={goTop} transition:fly aria-label="scroll to top">
        <svg
            fill="#000000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
        >
            <g stroke-width="0" />
            <g stroke-linecap="round" stroke-linejoin="round" />
            <g>
                <path
                    d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394 C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75 c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z"
                />
            </g>
        </svg>
    </button>
{/if}

<style lang="scss">
    button {
        cursor: pointer;
        position: fixed;
        z-index: 99;
        bottom: 1.2rem;
        right: 1.2rem;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0.38);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);

        svg {
            width: 30px;
            height: 30px;
            margin-block-start: 0.3rem;
        }
    }
</style>
