<template>  
  <div class="container-holder">
    <div class="row full-holder">

      <nav id="sidebarMenu" class="col-md-2 col-lg-1 d-md-block bg-light sidebar sidebarr collapse">
        <div class="position-sticky pt-3 sidebar-sticky sidebarr-holder">
          <div class="logo">
            <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
          </div>
          <ul class="nav flex-column list-iitems mt-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="fa fa-home"></i>
                <!-- Dashboard -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-bullseye"></i>
                <!-- Orders -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-list"></i>
                <!-- Products -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-user"></i>
                <!-- Customers -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-th-list"></i>
                <!-- Reports -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-love"></i>
                <!-- Integrations -->
              </a>
            </li>
          </ul>
          <p class="plus-symbol">
            <a href="#" style="color: #fff;"><i class="fa fa-plus"></i></a>
          </p>
        </div>
      </nav>
  
      <main class="col-md-8 ms-sm-auto col-lg-8 main-holder">
        <header class="navbar sticky-top p-0 shadow myheader">
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

        <div class="content-all">
          <router-view :key="$route.path"></router-view>
        </div>



      </main>
      <aside class="col-md-3 col-lg-3">
        <div class="col-lg-3 third navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">...</a>
          </div>
        </div>
      </aside>

    </div>
  </div>
  
</template>

<script>
import logoimg from "@/assets/img/logo.png";
import pageimg from "@/assets/img/screen.png";
export default {
  name: "DoctorLayout",
  components: {
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
.sidebarr-holder{
  width: 100%;
  height: 100%;
  background: #FFFFFF !important;
}
.sidebarr{
  background: #FFFFFF !important;
  padding-top: 30px;
  display: grid !important;
  justify-content: center;
  width: 100px;
}
.list-iitems li{
  margin-top: 20px;
}

.plus-symbol{
  position: absolute;
  top: 90%;
  background: #C599FF;
  padding: 8px 15px;
  border-radius: 12px;
}
.nav-link {
  color: #201d1f !important;
  text-align: center;
}

.nav-link:hover, .nav-link:focus {
  color: #FFFFFF !important;
  background: #007FDD;
  border-radius: 10px;
}
.nav-link.active{
  color: #FFFFFF !important;
  background: #007FDD;
  border-radius: 10px;
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
  padding-left: 50px;
  padding-right: 50px;
}
.full-holder{
  height: 100vh;
}
</style>