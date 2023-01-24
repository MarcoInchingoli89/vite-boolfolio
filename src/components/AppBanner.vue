<script>
export default {
    name: 'AppBanner',
    props: ['title']
}
</script>

<template>

    <div class="banner shadow-sm">
        <div class="container">
            <h1 class="py-4 mb-0 animate__animated animate__fadeInLeft">{{ title }}</h1>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

h1 {
    font-family: 'Satisfy', cursive;
}
</style>