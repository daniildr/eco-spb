import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            title: "123 123 1234",
            component: () => import("@/views/Home"),
            meta: {
                title: 'Home Page - Example App',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {
            path: "/HOME",
            title: "123 123 1234",
            component: () => import("@/views/Home"),
            meta: {
                title: 'Home Page - Example App',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {
            path: "/test",
            title: "4321 321 321",
            component: () => import("@/views/Test"),
        },
        {
            path: "*",
            title: "УПППС",
            component: () => import("@/views/404"),
        }
    ]
});