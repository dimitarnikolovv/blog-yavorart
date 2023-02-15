<div class="wrap">
    <button
        name="back-to-shop"
        on:click={() => {
            history.back();
        }}
    >
        <svg
            fill="#000000"
            viewBox="0 0 24 24"
            data-name="Flat Color"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M21,11H5.41l1.3-1.29A1,1,0,0,0,5.29,8.29l-3,3a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
                style="fill: rgb(0, 0, 0);"
            /></svg
        >
    </button>
</div>

<style lang="scss">
    div.wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 1rem;
        left: 5%;
        width: 3rem;
        height: 3rem;

        &:hover {
            svg {
                transform: translateX(-5px);
            }
        }

        button {
            cursor: pointer;
            border: none;
            background-color: transparent;
            display: block;
            height: 2.3rem;
        }

        svg {
            width: 2.3rem;
            height: 2.3rem;
            transition: transform 200ms ease-in-out;
        }
    }
</style>
