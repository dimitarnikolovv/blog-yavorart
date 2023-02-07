<script>
    import Blog from '../components/Blog.svelte';
    import InfoCard from '../components/InfoCard.svelte';
    import LinkButton from '../components/LinkButton.svelte';

    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="Yavor's blog" />
</svelte:head>

<InfoCard component={data.portfolio} />

<Blog posts={data.blogPosts} />

<LinkButton path="/gallery" text="Go to gallery" theme="light" />

<style lang="scss">
</style>
