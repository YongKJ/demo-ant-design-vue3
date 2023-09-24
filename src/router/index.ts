import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: {
            name: "design"
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
    {
        path: "/design",
        name: "design",
        component: () => import("@/views/AntDesignTest.vue"),
        meta: {
            title: "案例测试"
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
