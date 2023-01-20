import { createRouter, createWebHistory } from 'vue-router'

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
            component: HomeView
        },

        {
            path: '/projects',
            name: 'projects',
            component: HomeView
        },

        {
            path: '/projects',
            name: 'single-project',
            component: HomeView
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: HomeView
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },

    ]
})

export { router };