import { createRouter, createWebHistory } from "vue-router";
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import SignUp from '../pages/SignUp.vue'
import Categories from '../pages/Categories.vue'
import UpdateCategorie from '../pages/UpdateCategorie.vue'
import { useUserStore } from "../stores/user";

const requireAuth = async(to, from, next) => {
    const userStore = useUserStore()
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    if (user) {
        next();
    } else {
        next("/login");
    }
    userStore.loadingSession = false;
}

const routes = [
    {
        path: "/",
        component: Dashboard,
        beforeEnter: requireAuth
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/categories/:item",
        component: Categories,
        beforeEnter: requireAuth
    },
    {
        path: "/update/:id",
        component: UpdateCategorie,
        beforeEnter: requireAuth
    },
    {
        path: "/:catchAll(.*)*",
        component: Login
    }
]

const history = createWebHistory()
const router = createRouter({
    history,
    routes
})

export default router
