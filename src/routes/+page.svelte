<script>
    import Blog from '../components/Blog.svelte';
    import InfoCard from '../components/InfoCard.svelte';

    export let data;
</script>

<svelte:head>
    <title>Blog | Yavor Art</title>
    <meta name="description" content="Yavor's blog" />
</svelte:head>

<InfoCard component={data.portfolio} />

<Blog posts={data.blogPosts} />

<style lang="scss">
</style>
