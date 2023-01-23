<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
export default {
    components: {
        AppNav,
        AppFooter,
    },
    data() {
        return {
        }
    },

    methods: {

    },

}
</script>

<template>
    <AppNav />
    <RouterView />
    <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss';
</style>