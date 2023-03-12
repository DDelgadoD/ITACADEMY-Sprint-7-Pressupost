import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () =>
            import(/* webpackChunkName: '' */ "../components/Hello.vue"),
    },
    {
        path: "/home",
        component: () =>
            import(/* webpackChunkName: 'home' */ "../components/Home.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
