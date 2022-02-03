// import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register'
import Login from '@/views/Login.vue'

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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
