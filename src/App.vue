<script>
import AppNav from './components/AppNav.vue'
export default {
    components: {
        AppNav,
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

</template>

<style lang="scss">
@use './styles/general.scss';
</style>