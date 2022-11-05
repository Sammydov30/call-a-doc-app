import { createRouter, createWebHistory } from "vue-router";

import AuthLayout from "@/components/AuthLayout.vue";

// For Patient
import PatientDashboard from "@/views/patient/PatientDashboard.vue";
import PatientContinueRegister from "@/views/patient/ContinueRegister.vue";
import PatientLayout from "@/components/PatientLayout.vue";
import PatientAuthLayout from "@/components/PatientAuthLayout.vue";
import PatientSignIn from "@/views/patient/SignIn.vue";
import PatientForgotPassword from "@/views/patient/ForgotPassword.vue";

// For Doctor
import DoctorDashboard from "@/views/doctor/Dashboard.vue";
import DoctorContinueRegister from "@/views/doctor/ContinueRegister.vue";
import DoctorLayout from "@/components/DoctorLayout.vue";
import DoctorAuthLayout from "@/components/DoctorAuthLayout.vue";
import DoctorSignIn from "@/views/doctor/SignIn.vue";
import DoctorForgotPassword from "@/views/doctor/ForgotPassword.vue";

//General
import NotFound from "@/views/NotFound.vue";
import SignUp from "@/views/SignUp.vue";
import SelectType from "@/views/SelectType.vue";
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
    redirect: "/register",
    name: "Auth",
    component: AuthLayout,
    meta: {isGuestNeutral: true},
    children: [
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
    ],
  },


  //Patient
  ///
  /////////////////////////
  ///////////////////////
  {
    path: "/patient-auth",
    redirect: "/patient/login",
    name: "PatientAuth",
    component: PatientAuthLayout,
    meta: {isGuestPatient: true},
    children: [
      {
        path: "/patient/login",
        name: "PatientSignIn",
        component: PatientSignIn,
      },
      {
        path: "/patient/forgot-password",
        name: "PatientForgotPassword",
        component: PatientForgotPassword,
        props: true,
      },
      {
        path: "/patient/continue-registration",
        name: "PatientContinueRegister",
        component: PatientContinueRegister,
        props: true,
      },
    ],
  },


  //Doctor
  ///
  /////////////////////////
  ///////////////////////
  {
    path: "/doctor-auth",
    redirect: "/doctor/login",
    name: "DoctorAuth",
    component: DoctorAuthLayout,
    meta: {isGuestDoctor: true},
    children: [
      {
        path: "/doctor/login",
        name: "DoctorSignIn",
        component: DoctorSignIn,
      },
      {
        path: "/doctor/forgot-password",
        name: "DoctorForgotPassword",
        component: DoctorForgotPassword,
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
    next({ name: "PatientSignIn" });
  } else if (store.state.patient.token && to.meta.isGuestPatient) {
    next({ name: "PatientDashboard" });
  }else if (to.meta.d_requiresAuth && !store.state.doctor.token) {
    next({ name: "DoctorSignIn" });
  }else if (store.state.doctor.token && to.meta.isGuestDoctor) {
    next({ name: "DoctorDashboard" });
  } else {
    next();
  }
});

export default router;
