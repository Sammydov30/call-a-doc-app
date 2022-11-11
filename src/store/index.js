import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    mcolor: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    user: {
      data: {},
    },
    patient: {
      data: {},
      token: sessionStorage.getItem("PTOKEN"),
    },
    doctor: {
      data: {},
      token: sessionStorage.getItem("DTOKEN"),
    },
    dashboard: {
      loading: false,
      data: {}
    },
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      const sidenav = document.getElementById("sidenav-main");

      if (sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.remove("g-sidenav-pinned");
        setTimeout(function () {
          sidenav.classList.remove("bg-white");
        }, 100);
        sidenav.classList.remove("bg-transparent");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav.classList.add("bg-white");
        sidenav.classList.remove("bg-transparent");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },

    //Back end

    setUser: (state, user) => {
      state.user.data = user;
    },

    //Patients
    setPatient: (state, user) => {
      state.patient.data = user;
    },
    setPToken: (state, token) => {
      state.patient.token = token;
      sessionStorage.setItem('PTOKEN', token);
    },

    //Doctors
    setDoctor: (state, user) => {
      state.doctor.data = user;
    },
    setDToken: (state, token) => {
      state.doctor.token = token;
      sessionStorage.setItem('DTOKEN', token);
    },


  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },

    //Back End

    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then((response) => {
          commit('setUser', response);
          //commit('setToken', data.token)
          return response;
        })
    },
    verifyemail({commit}, user) {
      return axiosClient.post('/verifyemail', user)
        .then((response) => {
          commit('setUser', response);
          //commit('setToken', data.token)
          return response;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/auth/login', user)
        .then((response) => {
          return response;
        })
    },
    sendemailotp({commit}, user) {
      return axiosClient.post('/auth/emailotp', user)
        .then((response) => {
          return response;
        })
    },
    checkemailotp({commit}, user) {
      return axiosClient.post('/auth/verifyotp', user)
        .then((response) => {
          if (response.data.role=="1") {
            commit('setPatient', response);
            commit('setPToken', response.data.token);
          } else {
            commit('setDoctor', response);
            commit('setDToken', response.data.token);
          }
          return response;
        })
    },

    //For Patients
    pcontinueregister({commit}, user) {
      return axiosClient.post('/customer/continueregister', user)
        .then((response) => {
          commit('setPatient', response);
          commit('setPToken', response.data.token);
          return response;
        })
    },

    //For Doctors
    dcontinueregister({commit}, user) {
      return axiosClient.post('/doctor/continueregister', user)
        .then((response) => {
          commit('setDoctor', response);
          commit('setDToken', response.data.token);
          return response;
        })
    },


  },
  getters: {},
});

export default store;
