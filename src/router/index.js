import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import NotFound from "@/views/NotFound.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import AuthLayout from "@/components/AuthLayout.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/",
        name: "/",
        redirect: "/dashboard",
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/tables",
        name: "Tables",
        component: Tables,
      },
      {
        path: "/billing",
        name: "Billing",
        component: Billing,
      },
      {
        path: "/virtual-reality",
        name: "Virtual Reality",
        component: VirtualReality,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/rtl-page",
        name: "Rtl",
        component: Rtl,
      },

    ],
  },

  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: "/login",
        name: "Sign In",
        component: SignIn,
      },
      {
        path: "/register",
        name: "Sign Up",
        component: SignUp,
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Sign In" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
