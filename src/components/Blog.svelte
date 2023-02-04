<script>
    import BlogCard from './BlogCard.svelte';

    export let posts;
</script>

{#each posts as post}
    <BlogCard {post} />
{/each}
