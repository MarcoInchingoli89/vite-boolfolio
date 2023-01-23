<script>
import { state } from '../state.js'
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
        <div class="card bg-dark text-white border-0 shadow h-100">
            <img class="card-img-top img-fluid" :src="getImagePath(project.cover_image)" alt="">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ trimDescription(project.description) }}</p>
                <router-link class="text-decoration-none"
                    :to="{ name: 'single-project', params: { id: project.id } }">Read more</router-link>
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



</template>