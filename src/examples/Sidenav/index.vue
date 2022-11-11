<template>
  <aside
    id="sidenav-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl ms-3"
    :data-color="sidenavActiveBgColors"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img :src="logo" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Patient Dashboard</span>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :card-bg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo.png";

export default {
  name: "IndexComponent",
  components: {
    SidenavList,
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      logo,
      sidenavActiveBgColors: 'success'
    };
  },
};
</script>
