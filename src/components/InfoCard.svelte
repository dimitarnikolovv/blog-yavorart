<script>
    export let imageUrl = '';
</script>

<section class="info-card">
    <img src={imageUrl} alt="" />
    <div class="content">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloremque
            quibusdam at provident incidunt dolore et soluta numquam cupiditate! Consequatur, nam!
            Debitis quibusdam accusamus enim commodi assumenda cumque impedit et. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nulla sed incidunt tenetur quidem id vitae
            deleniti ea neque quaerat, necessitatibus aliquam dolorem hic sit nemo harum facilis
            nesciunt voluptatum adipisci.
        </p>
    </div>
</section>

<style lang="scss">
    section.info-card {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        padding-inline: 5%;
        padding-block: 5rem;
        min-height: calc(100vh - var(--header-height));
        background: #d9d9d9;
        color: black;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }
    img {
        max-height: 60vh;
        box-shadow: 23px 22px 67px 0 rgba(0, 0, 0, 0.25);
    }
</style>
