// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'



//路由懒加载
const WeaponList = () => import('@/view/weapon/WeaponList')
const WeaponAdd = () => import('@/view/weapon/WeaponAdd')
const WeaponShow = () => import('@/view/weapon/WeaponShow')


// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
    {
        path: '',
        // redirect重定向
        redirect: '/weapon'
    },
    {
        path: '/weapon',
        component: WeaponList,
    },
    {
        path: '/addWeapon',
        component: WeaponAdd
    },
    {
        path: '/WeaponShow',
        component: WeaponShow
    }
    // {
    //     path: '/home',
    //     component: Home,
    //     meta:{
    //         title:"首页"
    //     },
    //     children: [
    //         {
    //             path: '',
    //             redirect: 'news'
    //         },
    //         {
    //             path: 'news',
    //             component: HomeNews
    //         },
    //         {
    //             path: 'message',
    //             component: HomeMessage
    //         }
    //     ]
    // },
    // {
    //     path: '/about',
    //     component: About,
    //     meta:{
    //         title:"关于"
    //     },
    // },
    // {
    //     path: '/user/:userId',
    //     component: aUser,
    //     meta:{
    //         title:"用户"
    //     },
    // },
    // {
    //     path: '/profile',
    //     component: Profile,
    //     meta:{
    //         title:"档案"
    //     },
    // }
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
}) 

router.beforeEach((to, from, next) => {
    // // console.log(to);
    // // console.log(from);
    // document.title = to.matched[0].meta.title
    next();
})

// 3.将router对象传入到Vue实例
export default router
