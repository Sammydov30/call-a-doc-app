import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
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
      token: null,
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
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem('TOKEN', token);
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },

    register({commit}, user) {
      return axiosClient.post('/customer/register', user)
        .then((response) => {
          commit('setUser', response);
          //commit('setToken', data.token)
          return response;
        })
    },
  },
  getters: {},
});

export default store;
