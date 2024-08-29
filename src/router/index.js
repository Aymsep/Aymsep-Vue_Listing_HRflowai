import { createRouter , createWebHistory } from "vue-router";







const routes = [
    {
        name:'home',
        path:'/',
        component:()=>import('../views/Home.vue')
    },
    {
        name:'singleJob',
        path:'/job/:id',
        component:()=>import('../views/SingleJob.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router