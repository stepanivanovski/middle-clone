// import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

import GlobalFeed from '@/views/GlobalFeed.vue'
import YourFeed from '@/views/YourFeed.vue'
import TagFeed from '@/views/TagFeed.vue'
import Register from '@/views/Register'
import Login from '@/views/Login.vue'
import Article from '@/views/Article.vue'
import CreateArticle from '@/views/CreateArticle.vue'
import EditArticle from '@/views/EditArticle.vue' 
import Settings from '@/views/Settings.vue'
import UserProfile from '@/views/UserProfile.vue'


const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
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
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticle,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticle,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: UserProfile
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  }
]

const  router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  console.log(store.state.auth.isLoggedIn)
  if (to.matched.some((route) => route.meta?.isAuth)) {
    if (store.state.auth.isLoggedIn) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router
