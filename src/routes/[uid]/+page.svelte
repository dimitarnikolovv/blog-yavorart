<script>
    import * as prismicH from '@prismicio/helpers';
    import { SliceZone } from '@prismicio/svelte';
    import * as components from '$lib/slices';
    import { openModal } from 'svelte-modals';
    import { ModalForm } from '$lib/components';

    export let data;
    export let form;

    $: if (form?.success) {
        openModal(ModalForm);
    }
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="" />
</svelte:head>

{#if data.document.uid === 'contact'}
    <h1>
        {data.document.data.page_title[0].text}
    </h1>
    <div class="wrapper">
        <div class="content">{@html prismicH.asHTML(data.document.data.content)}</div>
        <div class="devider" />

        <div class="slice">
            <SliceZone slices={data.document.data.body} {components} />
        </div>
    </div>
{:else}
    <div class="page-content">
        <h1>
            {data.document.data.page_title[0].text}
        </h1>

        {#if data.document.data.content[0]?.text ?? false}
            <div class="content">
                {@html prismicH.asHTML(data.document.data.content)}
            </div>
        {/if}
    </div>

    <SliceZone slices={data.document.data.body} {components} />
{/if}

<style lang="scss">
    div.wrapper {
        display: flex;
        padding-block: 5rem;
        gap: 1.5rem;
        align-items: center;

        .devider {
            width: 2px;
            min-height: 400px;
            background-color: white;
        }
        .slice {
            width: 40%;
        }

        .content {
            width: 60%;
            padding: 1.5em;
        }

        @media only screen and (max-width: 900px) {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            padding-block: 0;

            div.content {
                width: 100%;
            }

            div.devider {
                display: none;
            }
            div.slice {
                width: 90%;
            }
        }
    }
    div.page-content {
        z-index: 3;
        position: relative;
        margin-block-end: 3rem;

        div.content {
            background-color: #73737312;
            padding: 1.5em;
            width: 100%;
        }
    }

    h1 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.5em;

        @media only screen and (max-width: 780px) {
            font-size: 1.5rem;
        }
    }
</style>
