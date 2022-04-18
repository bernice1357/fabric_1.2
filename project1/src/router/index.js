import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import Orders from '../views/Orders.vue'
import Deal from '../views/Deal.vue'
import AllOrders from '../views/AllOrders.vue'
import Add from '../views/Add.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },{
        path: '/placeOrder',
        name: 'PlaceOrder',
        component: PlaceOrder
    },{
        path: '/deal',
        name: 'Deal',
        component: Deal
    },{
      path: '/add',
      name: 'Add',
      component: Add
    },{
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/allorders',
        name: 'AllOrders',
        component: AllOrders
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
