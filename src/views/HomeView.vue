<script>
import 'animate.css';
export default {
    name: 'HomeView',
}
</script>

<template>

    <section class="hero d-flex align-items-center">
        <div class="info container d-flex align-items-center flex-column animate__animated animate__zoomIn">
            <h1>Marco Inchingoli</h1>
            <h2 class="text-white font_jost">Full Stack Web Developer</h2>
            <a class="btn btn-dark rounded-pill font_jost" href="#" role="button">About me</a>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.hero {
    width: 100%;
    height: 100vh;
    background-image: url("../../public/img/home-background.jpg");
    background-size: cover;

    h1 {
        font-family: 'Satisfy', cursive;
        color: dodgerblue;
        font-size: 100px;
    }

    h2 {
        font-size: 50px;
    }

    a {
        font-size: 25px;
        padding: 1rem;
    }

    .font_jost {
        font-family: 'Jost', sans-serif;
    }
}
</style>