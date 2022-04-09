import Vue from 'vue'
import VueRouter from 'vue-router'

import PlaceOrder from '../views/PlaceOrder.vue'
import Orders from '../views/Orders.vue'
import Deal from '../views/Deal.vue'
import AllOrders from '../views/AllOrders.vue'
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
      path: '/add',
      name: 'Add',
      component: Add
    },{
        path: '/',
        name: 'AllOrders',
        component: AllOrders
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
