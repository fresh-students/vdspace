import Vue from 'vue'
import Router from 'vue-router'
import MineRouter from '../components/mine.vue'
import IndexRouter from '../components/index.vue'
import CommuniRouter from '../components/community.vue'
import WetaRouter from '../components/wetalk.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Forget from '../components/forget.vue'
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/forget', component: Forget },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/mine', component: MineRouter },
        { path: '/index', component: IndexRouter },
        { path: '/commu', component: CommuniRouter },
        { path: '/wetalk', component: WetaRouter }
    ]
})