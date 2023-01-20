<script>
import axios from 'axios'

export default {
    name: 'SingleProjectView',

    data() {
        return {

        }
    },
    mounted() {

    }
}
</script>

<template>

    <div class="single-project">
        {{ $route.params.id }}

        {/* Your post data here */}
    </div>
</template>


<style lang="scss" scoped>

</style>