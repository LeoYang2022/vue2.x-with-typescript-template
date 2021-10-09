import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/part1',
        name: 'Part1',
        component: () => import('../views/typescript/Part1.vue'),
    },
    {
        path: '/part2',
        name: 'Part2',
        component: () => import('../views/typescript/Part2.vue'),
    },
    {
        path: '/part3',
        name: 'Part3',
        component: () => import('../views/typescript/Part3.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
