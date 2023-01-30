<script>
import 'animate.css';
export default {
    name: 'HomeView',
}
</script>

<template>

    <section id="hero">
        <!-- Wrapper -->
        <div class="hero_wrapper">
            <!-- Background Image -->
            <div class="hero_bg">
                <!-- Overlay Effect -->
                <div class="hero_overlay d-flex align-items-center">
                    <div class="container">
                        <!-- Homepage Text -->
                        <div class="text_content text-center animate__animated animate__zoomIn">
                            <h2 class="text-white font_satisfy">I'm Marco Inchingoli</h2>
                            <h3 class="text-white font_jost">A Jr. Full Stack Web Developer</h3>
                            <p class="text-white font_jost">based in Colleferro, Italy</p>
                            <router-link class="btn btn-outline-info rounded-pill" :to="{ name: 'about' }"
                                role="button">About Me</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');


.hero_wrapper {
    position: relative;
}

.hero_bg {
    width: 100%;
    height: 100vh;
    background-image: url("../../public/img/home-background.jpg");
    background-size: cover;
    background-attachment: fixed;

    .hero_overlay {
        position: absolute;
        background: rgba(57, 57, 57, 0.5);
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    h2 {
        font-size: 50px;
    }

    .font_jost {
        font-family: 'Jost', sans-serif;
    }

    .font_satisfy {
        font-family: 'Satisfy', cursive;
    }

    a {
        font-family: 'Jost', sans-serif;
        color: $bf-secondary;
        padding: 0.8rem 2.5rem;
        font-weight: bold;
    }

    .btn-outline-info {
        border-color: $bf-secondary;
        border-width: 3px;


    }

    .btn-outline-info:hover {
        background-color: $bf-secondary;
        color: white;
    }
}
</style>