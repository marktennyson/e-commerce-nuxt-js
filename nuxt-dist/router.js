import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _18c63b38 = () => interopDefault(import('../pages/header.vue' /* webpackChunkName: "pages/header" */))
const _1f2a2fd5 = () => interopDefault(import('../pages/our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _0e70da19 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _0c045618 = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _0b094c1b = () => interopDefault(import('../pages/product/products.vue' /* webpackChunkName: "pages/product/products" */))
const _9a585a6a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/header",
    component: _18c63b38,
    name: "header"
  }, {
    path: "/our-team",
    component: _1f2a2fd5,
    name: "our-team"
  }, {
    path: "/auth/login",
    component: _0e70da19,
    name: "auth-login"
  }, {
    path: "/auth/signup",
    component: _0c045618,
    name: "auth-signup"
  }, {
    path: "/product/products",
    component: _0b094c1b,
    name: "product-products"
  }, {
    path: "/",
    component: _9a585a6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
