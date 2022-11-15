<template>  
  <div class="container-holder">
    <MenuBarCard/>
    <div class="row full-holder">
      <main class="col-md-12 ms-sm-auto col-lg-12 main-holder">
        <header class="navbar sticky-top px-4 shadow myheader">
          <div class="row">

          </div>
          <div class="col-lg-5 first">
            <h1>Welcome, Kelvin</h1>
            <p>Friday, 07 August 2022</p>
          </div>
          <div class="col-lg-7 second d-grid justify-content-end">
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control search-input" type="text" placeholder="Search" aria-label="Search">
          </div>
        </header>

        <div class="content-all ps-3">
          <router-view :key="$route.path"></router-view>
        </div>
      </main>
    </div>
    <aside class="aside-holder">
      <SideBarCard></SideBarCard>
    </aside>
  </div>
  
</template>

<script>
import MenuBarCard from '@/components/mycomponents/MenuBarCard.vue'
import SideBarCard from '@/components/mycomponents/SideBarCard.vue'
import logoimg from "@/assets/img/logo.png";
import pageimg from "@/assets/img/screen.png";

export default {
  name: "PatientLayout",
  components: {
    MenuBarCard,
    SideBarCard,
  },
  data() {
    return {
      logoimg,
      pageimg
    }
  },
  methods: {

  },
};
</script>


<style scoped>

.container-holder{
  display: flex;
  position: fixed;
}
.myheader{
  background: transparent !important;
  box-shadow: unset !important;
}
.first h1{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 39px;
  line-height: 38px;
  color: #1F2933;
}

.search-input{
  padding: 6px 30px;
  width: 206px;
  height: 46px;
  background: #E4E7EB;
  border-radius: 56px !important;
  margin-top: -40px;
}
.main-holder{
  padding-top: 20px;
  padding-left: 2rem;
  padding-right: 5px;
}
.full-holder{
  height: 100vh;
  width: 75%;
}
.aside-holder{
  background: #FFFFFF;
  height: 100vh;
  width: 25%;
  overflow-y: scroll;
}
.content-all{
  height: 100vh;
  overflow-y: scroll;
  padding: 10px;
  padding-bottom: 10rem;
}
</style>