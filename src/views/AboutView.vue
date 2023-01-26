<script>
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'AboutView',
    components: { AppBanner }
}
</script>

<template>

    <AppBanner title="About" />
    <div class="container-fluid pt-4">
        <div class="image_wrapper d-flex align-center justify-content-center">
            <div class="about_image rounded-circle p-2 mb-3">
                <img width="100" class="img-fluid rounded-circle h-100 w-100" src="../../public/img/marco-about.jpeg"
                    alt="">
            </div>
        </div>
        <section class="info_about text-center">
            <h1 class="title_info text-white mb-0 pb-3">I'm <span class="bf_secondary">Marco
                    Inchingoli</span>,
                a
                Full Stack Web
                Developer</h1>
            <p class="lead text-secondary mb-0 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga dolor
                natus
                possimus impedit
                omnis laboriosam dignissimos dolore quos quod ullam consequatur provident quam ex corporis, iste, animi
                porro veniam cum? Minima et, ullam consequuntur eaque molestiae eum dolorum illum, vitae incidunt fuga
                libero a consequatur laborum sint pariatur quisquam voluptatem autem dignissimos voluptates cumque
                praesentium harum. Temporibus, cumque eius! Dicta fugiat laborum, quis iure, ea quas necessitatibus
                dignissimos, excepturi fugit dolore magnam tempore! Ullam illo aut ad illum, molestiae id rem veritatis
                enim eum aliquid fugiat animi veniam repellat pariatur assumenda laborum praesentium beatae fuga.
                Asperiores odio dolores laudantium, odit nam est nesciunt cumque natus, deserunt aliquam minima.
                Distinctio cupiditate dignissimos, laborum commodi odio expedita modi doloremque quo incidunt.
                Aspernatur voluptatum sit cum ab blanditiis nulla ut laborum necessitatibus commodi, voluptas provident
                odit exercitationem eligendi iure? Deleniti fugiat quis cumque ipsa reiciendis iure dolore officiis
                laboriosam odio officia, reprehenderit voluptates voluptatum eius in dolorem ducimus facere voluptatibus
                magni nisi rerum molestiae! Tempora velit quaerat est! Porro adipisci assumenda dolores quod, mollitia
                quisquam quae aperiam vel. Similique harum soluta veniam vel, ex unde, explicabo qui culpa placeat
                commodi delectus, omnis eligendi iusto et. Minus praesentium repellendus voluptates rerum?
                Exercitationem, consequatur temporibus.</p>
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.container-fluid {
    background-color: $bf-primary;

    .about_image {
        height: 250px;
        width: 250px;
        background-color: rgba(0, 0, 0, 0.2);

        img {
            object-fit: cover;
            object-position: right top;
        }
    }

    .title_info,
    p {
        font-family: 'Jost', sans-serif;
    }

    .bf_secondary {
        color: $bf-secondary;
        ;
    }
}
</style>