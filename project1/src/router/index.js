import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import Orders from '../views/Orders.vue'
import Deal from '../views/Deal.vue'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Orders',
        name: 'orders',
        component: Orders
    },{
        path: '/PlaceOrder',
        name: 'placeOrder',
        component: PlaceOrder
    },{
        path: '/deal',
        name: 'deal',
        component: Deal
    },{
        path: '/',
        name: 'home',
        component: Home
    },{
      path: '/add',
      name: 'Add',
      component: Add
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
