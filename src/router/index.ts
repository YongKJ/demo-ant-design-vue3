import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: {
            name: "test"
        }
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/TestDemo.vue"),
        meta: {
            title: "例子测试"
        }
    },
    {
        path: "/demo",
        name: "demo",
        component: () => import("@/views/DemoTest.vue"),
        meta: {
            title: "案例测试"
        }
    },
]

const router = new VueRouter({
    routes
})

export default router
