<script>
import axios from 'axios'

export default {
    name: 'SingleProjectView',

    data() {
        return {
            posts: null,
            base_api_url: 'http://127.0.0.1:8000',
            loading: true,
            error: null
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                })
        },

        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path;
            } else {
                return '/img/placeholder_cat.jpg'
            }
        },

        prevPage(url) {
            console.log(url);
            this.getProjects(url);
        },

        nextPage(url) {
            console.log(url);
            this.getProjects(url);
        }
    },
    mounted() {
        const url = this.api_base_url + '/api/projects/' + this.$route.params.id
        console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
    }
}
</script>

<template>
    <AppBanner :title="$route.params.id" />
    <div class="single-post" v-if="project">
        <img class="img-fluid w-100" :src="api_base_url + '/storage/' + project.cover_image" :alt="project.title">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.description }}
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>