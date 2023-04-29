import { createRouter, createWebHistory } from "vue-router";
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import SignUpNat from '../pages/SignUpNat.vue'
import SignUpJud from '../pages/SignUpJud.vue'
import Categories from '../pages/Categories.vue'

const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: SignUpNat
    },
    {
        path: "/signup1",
        component: SignUpJud
    },
    {
        path: "/categories",
        component: Categories
    },

]

const history = createWebHistory()
const router = createRouter({
    history,
    routes
})

export default router
