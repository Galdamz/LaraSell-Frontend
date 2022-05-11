import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthRouter from './routes/auth.routes';
import store from '../store';

const routes: Array<RouteRecordRaw> = [
    ...AuthRouter,
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


router.beforeEach((to, form) => {
    if (store.getters.isLogged) {
        to.fullPath = '/'
    } else {
        to.fullPath = '/auth/login'
    }
});
export default router
