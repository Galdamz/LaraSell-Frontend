import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthRouter from './routes/auth.routes';

const routes: Array<RouteRecordRaw> = [
    ...AuthRouter,
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
