import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home"),
            meta: {
                title: 'Эко-СПБ - Вывоз мусора в СПБ И ЛО. Вывоз строительного бытового мусора',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {
            path: "/success",
            component: () => import("@/views/SuccessPage"),
            meta: {
                title: 'Ваше сообщение успешно отправлено - Эко-СПБ - Вывоз мусора в СПБ И ЛО. Вывоз строительного бытового мусора',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {
            path: "*",
            component: () => import("@/views/NoFoundPage"),
            meta: {
                title: 'Страница не найдена - Эко-СПБ - Вывоз мусора в СПБ И ЛО. Вывоз строительного бытового мусора',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {
            path: '/HOME',
            redirect: '/'
        },
        {
            path: '/ABOUT',
            redirect: '/'
        },
        {
            path: '/CARPARK',
            redirect: '/'
        },
        {
            path: '/PRICE',
            redirect: '/'
        },
        {
            path: '/CONTACT',
            redirect: '/'
        }
    ]
});