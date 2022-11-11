import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "@/components/AuthLayout.vue";

// For Patient
import PatientDashboard from "@/views/patient/PatientDashboard.vue";
import PatientContinueRegister from "@/views/patient/ContinueRegister.vue";
import PatientLayout from "@/components/PatientLayout.vue";

// For Doctor
import DoctorDashboard from "@/views/doctor/DoctorDashboard.vue";
import DoctorContinueRegister from "@/views/doctor/ContinueRegister.vue";
import DoctorLayout from "@/components/DoctorLayout.vue";


//General
import NotFound from "@/views/NotFound.vue";
import SignUp from "@/views/SignUp.vue";
import SelectType from "@/views/SelectType.vue";
import SignIn from "@/views/SignIn.vue";
import store from "@/store";

const routes = [

  //Customer
  {
    path: "/",
    redirect: "/patient/dashboard",
    component: PatientLayout,
    meta: { p_requiresAuth: true },
    children: [
      {
        path: "/",
        name: "/",
        redirect: "/patient/dashboard",
      },
      {
        path: "/patient/dashboard",
        name: "PatientDashboard",
        component: PatientDashboard,
      },

    ],
  },

  //Doctor  
  {
    path: "/doctor",
    redirect: "/doctor/dashboard",
    component: DoctorLayout,
    meta: { d_requiresAuth: true },
    children: [
      {
        path: "/doctor",
        name: "/doctor",
        redirect: "/doctor/dashboard",
      },
      {
        path: "/doctor/dashboard",
        name: "DoctorDashboard",
        component: DoctorDashboard,
      },

    ],
  },

  //General
  ///
  /////////////////////////
  ///////////////////////
  {
    path: "/auth",
    redirect: "/auth/login",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: "/auth/login",
        name: "SignIn",
        component: SignIn,
        props: true,
      },
      {
        path: "/register",
        name: "SignUp",
        component: SignUp,
        props: true,
      },
      {
        path: "/select-type",
        name: "SelectType",
        component: SelectType,
        props: true,
      },
      {
        path: "/patient/continue-registration",
        name: "PatientContinueRegister",
        component: PatientContinueRegister,
        props: true,
      },
      {
        path: "/doctor/continue-registration",
        name: "DoctorContinueRegister",
        component: DoctorContinueRegister,
        props: true,
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
  if (to.meta.p_requiresAuth && !store.state.patient.token) {
    next({ name: "SignIn" });
  }else if (to.meta.d_requiresAuth && !store.state.doctor.token) {
    next({ name: "SignIn" });
  } else if (store.state.patient.token && to.meta.isGuest) {
    next({ name: "PatientDashboard" });
  }else if (store.state.doctor.token && to.meta.isGuest) {
    next({ name: "DoctorDashboard" });
  } else {
    next();
  }
});

export default router;
