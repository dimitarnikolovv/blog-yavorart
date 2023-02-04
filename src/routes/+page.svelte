<script>
    import Blog from '../components/Blog.svelte';
    import InfoCard from '../components/InfoCard.svelte';

    export let data;
</script>

<svelte:head>
    <title>Yavor's Art | {data.document.data.page_title[0].text}</title>
    <meta name="description" content="Yavor's blog" />
</svelte:head>

<InfoCard component={data.portfolio} />

<Blog posts={data.blogPosts} />

<style lang="scss">
</style>
