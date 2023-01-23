<script>
import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'
import { state } from '../state.js'

export default {
    name: 'SingleProjectView',
    components: {
        AppBanner
    },

    data() {
        return {
            project: null,
            loading: true,
            error: null,
            state
        }
    },
    methods: {

        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.state.base_api_url + '/storage/' + path;
            } else {
                return '/img/placeholder_cat.jpg'
            }
        },
    },
    mounted() {
        const url = this.state.base_api_url + '/api/projects/' + this.$route.params.id
        console.log(url);
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                } else {
                    this.$router.push({ name: 'not-found' });
                }
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>


    <AppBanner :title="$route.params.id" />
    <div class="single-project" v-if="project">
        <div class="container">
            <img :src="getImagePath(project.cover_image)" class="w-25 card-img-top img-fluid pt-3" :alt="project.title">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.description }}
            </div>
            <div class="type">
                <strong>Type: </strong>
                <span v-if="project.type">{{ project.type.name }}</span>
                <span v-else>Uncategorized</span>
            </div>
            <div class="technologies">
                <strong>Technologies: </strong>
                <ul v-if="project.technologies.length > 0">
                    <li v-for="technology in project.technologies">{{ technology.name }}</li>
                </ul>
                <span v-else>
                    <span>No technologies</span>
                </span>
            </div>
        </div>
    </div>

    <div v-else class="d-flex justify-content-center align-items-center vh-100">
        <h2 class="p-2">Loading...</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split"
            viewBox="0 0 16 16">
            <path
                d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
        </svg>
    </div>



</template>


<style lang="scss" scoped>

</style>