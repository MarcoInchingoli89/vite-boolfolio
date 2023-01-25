<script>
import 'animate.css';
export default {
    name: 'HomeView',
}
</script>

<template>

    <section class="hero">
        <div class="hero_wrapper">
            <div class="hero_bg">
                <div class="hero_overlay d-flex align-items-center">
                    <div class="container m-auto">
                        <div class="row">
                            <div class="col-12 text-center animate__animated animate__zoomIn">
                                <h2 class="text-white font_satisfy">I'm Marco Inchingoli</h2>
                                <h3 class="text-white font_jost">A Web Developer Full Stack</h3>
                                <p class="text-white font_jost">based in Colleferro, Italy</p>
                                <button type="button" class="btn btn-outline-info rounded-pill px-4">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
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


    h1 {
        font-family: 'Satisfy', cursive;
        font-size: 100px;
    }

    h2 {
        font-size: 50px;
        /* color: adjust-hue($color: #0a6394, $degrees: 0); */
    }

    a {
        font-size: 25px;
        padding: 0.5rem 3.5rem;
    }

    .font_jost {
        font-family: 'Jost', sans-serif;
    }

    .font_satisfy {
        font-family: 'Satisfy', cursive;
    }
}
</style>