<template>

  <div class="mx-auto col-xl-6 col-lg-6 col-md-6 d-flex flex-column mt-5 form-area">
    <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
    <div class="mt-5 form-contain card card-plain">
      <div class="pb-0 card-header text-start">
        <h3 class="font-weight-bolder text-info text-gradient">Sign Up</h3>
      </div>
      <div class="card-body">
        <div v-show="erroneous" class="alert alert-danger errormsg"></div>
        <form role="form" class="text-start" @submit="register">
          <label>Email</label>
          <vsud-input icon="fas fa-email" type="email" placeholder="Email" v-model="user.email" />
          <label>Password</label>
          <vsud-input icon="fas fa-email" type="password" placeholder="Password" v-model="user.password" />
          <div class="text-center">
            <VsudSocialButton v-if="loading" color="blue">
              Loading...
            </VsudSocialButton>
            <VsudSocialButton v-else type="submit" color="blue">
              Continue with email
            </VsudSocialButton>
          </div>
        </form>
        <hr><br>
        <VsudSocialButton color="black">
          <img src="../assets/img/google-logo.png" style="width: 20px;" alt="">
          Sign in with Google
        </VsudSocialButton>
        
      </div>

    </div>
  </div>

  <div class="col-md-6 no-p-m">
      <div
        class="h-100 py-5"
        :style="{
          backgroundImage:
            `url(${bgImg})`,
          backgroundSize: 'cover',
        }"
      ></div>
    
  </div>

</template>

<script>
import store from "../store";
import VsudInput from "@/components/VsudInput.vue";
import VsudSocialButton from "@/components/VsudSocialButton.vue";
import bgImg from "@/assets/img/bg/bg-2.jpg";
import logoimg from "@/assets/img/logo.png";
const body = document.getElementsByTagName("body")[0];
export default {
  name: "SigninPage",
  components: {
    VsudInput,
    VsudSocialButton
  },
  data() {
    return {
      bgImg,
      logoimg,
      user: {
        email: "",
        password: "",
        password_confirmation: "Sendap30"
      },
      loading: false,
      erroneous: false,
    }
  },
  beforeMount() {
    this.$store.state.hideConfigButton = true;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    body.classList.add("bg-gray-100");
  },
  methods: {
    register(ev) {
      ev.preventDefault();
      this.loading = true;
      store
        .dispatch("register", this.user)
        .then(() => {
          this.loading = false;
          this.$router.push({
            name: "Sign In",
          });
          console.log('successful');
          
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          if (error.response) {
            if (error.response.status === 422) {
              // errors.value = error.response.data.errors;
              console.log(error.response.data.status);
              this.erroneous= true;
              document.getElementsByClassName("errormsg")[0].innerHTML=error.response.data.message;
            }
          }
        });
    }
  },
};
</script>

<style scoped>
@media (min-width: 1200px){
  .no-p-m{
    margin: 0;
    padding: 0;
  }
  .form-area{
    min-height: 715px;
  }
  .form-contain{
    padding-right: 150px !important;
    padding-left: 150px !important;
  }
  .myp{
    padding-top: 1.2rem !important;
    padding-bottom: 1.2rem !important;
  }

}
</style>