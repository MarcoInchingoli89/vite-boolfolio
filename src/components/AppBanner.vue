<script>
export default {
    name: 'AppBanner',
    props: ['title']
}
</script>

<template>

    <div class="banner shadow-sm text-white">
        <div class="container">
            <h1 class="py-4 mb-0 animate__animated animate__fadeInLeft text-center">{{ title }}</h1>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.banner {
    background-color: $bf-primary;

}


h1 {
    font-family: 'Satisfy', cursive;
    border-bottom: 2.5px solid $bf-secondary;
}
</style>