<script>
    import BlogCard from './BlogCard.svelte';

    export let posts;
</script>

<section aria-label="Blog Posts">
    {#each posts as post}
        <BlogCard {post} />
    {/each}
</section>

<style lang="scss">
</style>
