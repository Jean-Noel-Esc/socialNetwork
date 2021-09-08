import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'


const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/signup"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main"),
  },
  // {
  //   path: "/admin",
  //   name: "Admin",
  //   component: () => import("../views/Admin"),
  // },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
