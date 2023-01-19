<script>
import axios from 'axios';
export default {
    name: "ProjectCard",
    data() {
        return {
            projects: null,
            base_api_url: 'http://127.0.0.1:8000',
            loading: true,
            error: null,
            max: 100
        }
    },

    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
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
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>

    <div class="container p-5">
        <div class="row row-cols-1 row-cols-sm-3 g-4">
            <div class="col" v-for="project in projects">
                <div class="card">
                    <img class="card-img-top img-fluid" :src="getImagePath(project.cover_image)" alt="">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                        <div class="card-footer text-muted">
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
                </div>
            </div>
        </div>
    </div>

    <!-- <nav aria-label="Page navigation">
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
    </nav> -->

</template>