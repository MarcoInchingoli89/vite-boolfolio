import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/about',
            name: 'about',
            component: AboutView
        },

        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },

        {
            path: '/projects/:id',
            name: 'single-project',
            component: SingleProjectView
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },


    ]
})

export { router };