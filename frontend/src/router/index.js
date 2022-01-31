import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main"),
  },
  {
    path: "/addpost",
    name: "AddPost",
    component: () => import("../views/AddPost"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin"),
  },
  {
    path: "/singlepost/:id",
    name: "SinglePost",
    component: () => import("../views/SinglePost"),
    props:true,
  },
  {
    path: "/userprofile",
    name: "UserProfile",
    component: () => import("../views/UserProfile"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
