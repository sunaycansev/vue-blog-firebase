import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Blogs from "@/views/Blogs";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ForgotPassword from "@/views/ForgotPassword";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    component: Blogs,
    name: "Blogs",
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "ForgotPassword",
    meta: {
      title: "Forgot Password",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Sunayblog`;
  next();
});

export default router;
