<script>
    import { BlogCard } from '$lib/components';

    export let slice;
</script>

<section aria-label="Blog Posts">
    {#each slice.items as post}
        <BlogCard {post} />
    {/each}
</section>

<style lang="scss">
</style>
