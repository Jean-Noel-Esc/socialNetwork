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
  {
    path: "/addPost",
    name: "addPost",
    component: () => import("../views/addPost"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin"),
  },
  // {
  //   path: "/post/:id",
  //   name: "Admin",
  //   component: () => import("../views/Admin"),
  //   props:true,
  // },

  {
    path: "/singlepost/:id",
    name: "singlePost",
    component: () => import("../views/singlePost"),
    props:true,
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
