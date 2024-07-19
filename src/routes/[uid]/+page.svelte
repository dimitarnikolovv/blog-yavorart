<script>
  import * as prismicH from '@prismicio/helpers';
  import { SliceZone } from '@prismicio/svelte';
  import * as components from '$lib/slices';
  import { openModal } from 'svelte-modals';
  import { ModalForm, LinkButton } from '$lib/components';

  export let data;
  export let form;

  $: if (form?.success) {
    openModal(ModalForm);
  }

  const title = data.document.data?.page_title[0].text.split('-').join('-<br/>') ?? '';
</script>

<svelte:head>
  <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
  <meta name="description" content="" />
</svelte:head>

{#if data.document.uid === 'contact'}
  <div class="wrap">
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
  </div>
{:else if data.document.uid === 'magazine'}
  <div class="magazine">
    <div class="img-wrap">
      <img src={data.document.data.image.url} alt="" />
    </div>

    <div class="magazine-wrap">
      <div class="content">
        <h1>{@html title}</h1>

        {#if data.document.data.content[0]?.text ?? false}
          {@html prismicH.asHTML(data.document.data.content)}
        {/if}
      </div>

      <div class="actions">
        <LinkButton path="/maragize/order" text="Поръчай" transparent="true" theme="light" />
      </div>
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
  div.magazine {
    padding-inline: 5%;
    padding-block: 3rem;
    place-items: center;
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    background: rgb(28, 28, 28);
    // background: -moz-linear-gradient(
    //   45deg,
    //   rgba(28, 28, 28, 1) 0%,
    //   rgba(84, 84, 84, 1) 60%,
    //   rgba(66, 66, 66, 1) 100%
    // );
    // background: -webkit-linear-gradient(
    //   45deg,
    //   rgba(28, 28, 28, 1) 0%,
    //   rgba(84, 84, 84, 1) 60%,
    //   rgba(66, 66, 66, 1) 100%
    // );
    background: linear-gradient(
      45deg,
      rgba(28, 28, 28, 1) 0%,
      rgba(84, 84, 84, 1) 60%,
      rgba(66, 66, 66, 1) 100%
    );

    @media only screen and (max-width: 768px) {
      //   background: -moz-linear-gradient(
      //     360deg,
      //     rgba(28, 28, 28, 1) 0%,
      //     rgba(84, 84, 84, 1) 60%,
      //     rgba(66, 66, 66, 1) 100%
      //   );
      //   background: -webkit-linear-gradient(
      //     360deg,
      //     rgba(28, 28, 28, 1) 0%,
      //     rgba(84, 84, 84, 1) 60%,
      //     rgba(66, 66, 66, 1) 100%
      //   );
      background: linear-gradient(
        360deg,
        rgb(13, 13, 13) 0%,
        rgb(53, 53, 53) 60%,
        rgba(66, 66, 66, 1) 100%
      );
    }

    h1 {
      font-size: 1.5rem;
      letter-spacing: 1.2px;

      @media only screen and (max-width: 768px) {
        font-size: 1.2rem;
      }
    }

    .img-wrap {
      grid-column-start: 1;
      grid-column-end: 6;
      img {
        object-fit: contain;
      }

      @media only screen and (max-width: 768px) {
        margin-block-end: 2rem;
        width: 95%;
        padding-inline-end: 5%;
      }
    }

    .magazine-wrap {
      grid-column-start: 7;
      grid-column-end: 11;

      @media only screen and (max-width: 768px) {
        grid-column-start: unset;
        grid-column-end: unset;
      }

      .actions {
        margin-top: 5rem;
        width: fit-content;
        margin-inline: auto;
      }
    }
  }

  div.wrap {
    padding-inline: 5%;
  }
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
