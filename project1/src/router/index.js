import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/placeOrder',
        name: 'PlaceOrder',
        component: PlaceOrder
    },{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/login',
        name: 'Login',
        component: Login
    },{
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
