<script>
import axios from 'axios'
import { state } from '../state.js'
import ProjectCard from '../components/ProjectCard.vue'
export default {
    name: "ProjectsList",
    components: { ProjectCard },
    data() {
        return {
            projects: null,
            loading: true,
            error: null,
            results: null,
            state
        }
    },

    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                    this.results = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.state.base_api_url + '/storage/' + path;
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
        this.getProjects(this.state.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <div class="container-fluid p-5 bg_projects" v-if="results">
        <div class="row row-cols-1 row-cols-sm-3 g-4">
            <ProjectCard :project="project" v-for="project in projects" />
        </div>




        <nav aria-label="Page navigation" class="pt-4">
            <ul class="pagination">
                <li class="page-item" v-if="results.prev_page_url" @click="prevPage(results.prev_page_url)">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                    results.current_page
                }}</a>
                </li>
                <li class="page-item" v-if="results.next_page_url" @click="nextPage(results.next_page_url)">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>



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
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.bg_projects {
    background-color: $bf-primary;
}

.page-link {
    background-color: $bf-secondary;
    border: none;
    color: $bf-dark;
}
</style>