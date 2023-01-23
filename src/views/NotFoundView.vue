<script>
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'NotFoundView',
    components: { AppBanner }
}
</script>

<template>

    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center row">
            <div class=" col-md-6">
                <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                    class="img-fluid">
            </div>
            <div class=" col-md-6 mt-5">
                <p class="fs-3"> <span class="text-danger">😨 Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <router-link class="btn btn-dark" to="/">Go to Homepage</router-link>
            </div>

        </div>
    </div>





    <!--  <div class="d-flex align-items-center justify-content-center vh-100 bg-secondary">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">😨 Opps!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <router-link class="btn btn-dark" to="/">Go to Homepage</router-link>
        </div>
    </div> -->

</template>


<style lang="scss" scoped>

</style>