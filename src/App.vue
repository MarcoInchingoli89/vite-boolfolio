<script>
import axios from 'axios';
export default {
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
    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Vite Boolfolio</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page">Home <span
                                class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

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

</template>

<style lang="scss">
@use './styles/general.scss'
</style>