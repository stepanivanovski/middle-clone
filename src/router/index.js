// import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
