import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/auth',
        name: 'auth-view',
        props: false,
        component: () => import("../../views/Auth/AuthView.vue"),
        children: [
            {
                path: 'register',
                name: 'register-view',
                props: false,
                component: () => import('../../views/Auth/Register/RegisterView.vue')
            },
            {
                path: 'login',
                name: 'login-view',
                props: false,
                component: () => import('../../views/Auth/Login/LoginView.vue')
            },
        ]
    }
]

export default routes;