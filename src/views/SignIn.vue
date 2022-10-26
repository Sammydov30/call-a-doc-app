<template>
  <div class="mx-auto col-xl-6 col-lg-6 col-md-6 d-flex flex-column mt-5 form-area">
    <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
    <div class="mt-5 card card-plain form-contain">
      <div class="pb-0 card-header text-start">
        <p class="mb-0">Pick up from where ou left off</p>
        <h3 class="font-weight-bolder text-info">Welcome back</h3>
      </div>
      <div class="card-body">
        <form role="form" class="text-start">
          <label>Email</label>
          <vsud-input type="email" placeholder="Email" name="email" />
          <div class="d-flex justify-content-between">
            <vsud-switch id="rememberMe" checked><small>Remember me</small></vsud-switch>
            <p class="text-end"><a href="#" class="text-info small-text">Forgot password?</a></p>
          </div>
          <hr>
          <div class="text-center">
            <vsud-button
              class="my-4 mb-2"
              variant="gradient"
              color="info"
              full-width
            >Sign in</vsud-button>
          </div>
        </form>
      </div>
      <div class="px-1 pt-0 text-center card-footer px-lg-2">
        <p class="mx-auto mb-4 text-sm">
          Don't have an account?
          <router-link
          :to="{ name: 'Sign Up' }"
          class="text-info text-gradient font-weight-bold"
          >
            Sign up
          </router-link>
        </p>
      </div>

    </div>
  </div>

  <div class="col-md-6 d-none d-sm-block no-p-m">
      <div
        class="h-100 py-5"
        :style="{
          backgroundImage:
            `url(${bgImg})`,
          backgroundSize: 'cover',
        }"
      ></div>
    
  </div>

  <OTPModal :variant="danger" :visible="ShowModal">

    <form action="">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  </OTPModal>

</template>

<script>
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
import OTPModal from '@/components/modals/OTPModal.vue';
import VsudInput from "@/components/VsudInput.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/bg/bg-1.jpg";
import logoimg from "@/assets/img/logo.png";
const body = document.getElementsByTagName("body")[0];
// const myModal = document.getElementById('myModal');

export default {
  name: "SigninPage",
  components: {
    // Navbar,
    // AppFooter,
    VsudInput,
    VsudSwitch,
    VsudButton,
    OTPModal
  },
  data() {
    return {
      bgImg,
      logoimg,
      ShowModal : false
    }
  },
  mounted() {
    this.ShowModal=true;
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    body.classList.remove("bg-gray-100");
    
  },
  beforeUnmount() {
    body.classList.add("bg-gray-100");
  },
};
</script>


<style scoped>
@media (min-width: 1200px){
  .no-p-m{
    margin: 0;
    padding: 0;
  }
  .form-contain{
    padding-right: 150px !important;
    padding-left: 150px !important;
  }
  .myp{
    padding-top: 1.2rem !important;
    padding-bottom: 1.2rem !important;
  }
  .form-area{
    min-height: 710px;
  }
  .small-text{
    font-size: 11px;;
  }
}
</style>