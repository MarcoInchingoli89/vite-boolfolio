<script>
import { state } from '../state.js';
import 'animate.css';
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    data() {
        return {
            max: 100,
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

        /**
         * 
         * @param {string} text the project description
         */

        trimDescription(text) {
            if (text) {
                console.log(text);
                return text.slice(0, this.max) + '...';
            }

            return text
        }
    },


}
</script>

<template>
    <div class="col">
        <div class="card bg_dark text-white border-0 shadow h-100 animate__animated animate__zoomIn">
            <div class="card-img-container">
                <img class="card-img-top img-fluid" :src="getImagePath(project.cover_image)" alt="">
                <div class="overlay"></div>
                <h4 class="card-title">{{ project.title }}</h4>
            </div>
            <div class="card-body">
                <p class="card-description text-center">{{ project.description }}</p>
                <div class="card-links">
                    <a href="#" class="btn btn-primary rounded-pill px-5 py-2">Web</a>
                    <a :href="project.source_code" class="btn btn-secondary ms-3 rounded-pill px-5 py-2"
                        target="_blank">Code</a>
                </div>
            </div>
            <div class="card-footer text-muted p-0">
                <div class="technologies text-center">
                    <strong>Technologies: </strong>
                    <div class="technologies-list mt-1 mb-2">
                        <span v-if="project.technologies.length > 0">
                            <span v-for="technology in project.technologies" class="technology">{{ technology.name }}</span>
                        </span>
                        <span v-else>
                            <span>No technologies</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.bg_dark {
    background-color: $bf-darker;
}

.card-img-container {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    transition: transform 0.5s ease;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.card-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.card:hover .card-img-top {
    transform: scale(1.2);
}

.card:hover .overlay {
    opacity: 1;
}

.card:hover .card-title {
    opacity: 1;
}

.card-description {
    margin-bottom: 1rem;
}

.card-links {
    display: flex;
    justify-content: center;
}

.btn-primary {
    background-color: $bf-dark;
    border: none;
}

.btn-primary:hover {
    color: $bf-secondary;
    background-color: $bf-primary;
}

.btn-secondary {
    background-color: $bf-secondary;
    border: none;
}

.btn-secondary:hover {
    color: $bf-secondary;
    background-color: $bf-primary;
}

.technology {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #eee;
    color: #333;
    border-radius: 0.25rem;
}

.card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.technologies-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>