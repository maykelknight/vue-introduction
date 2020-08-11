import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import PokemonDetails from '../views/PokemonDetails';
import About from '../views/About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'List',
        component: List
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/details/:id?',
        name: 'PokemonDetails',
        component: PokemonDetails
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
