<template>
    <div class="mx-auto col-xl-6 col-lg-6 col-md-6 d-flex flex-column mt-5 form-area">
      <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
      <div class="mt-5 card card-plain form-contain">
        <div class="pb-0 card-header text-start">
          <p class="mb-0">Pick up from where you left off</p>
          <h3 class="font-weight-bolder text-info">Welcome back</h3>
        </div>
        <div class="card-body">
          <div v-show="erroneous" class="alert alert-danger errormsg"></div>
          <form role="form" class="text-start" @submit="login">
            <label>Email</label>
            <vsud-input v-model="user.email" type="email" placeholder="Email" name="email" />
            <!-- <label>Password</label>
            <vsud-input v-model="user.password" type="password" placeholder="Password" name="password" /> -->
            <div class="d-flex justify-content-between">
              <vsud-checkbox id="rememberMe" v-model="rememberme" checked="false"><small>Remember me</small></vsud-checkbox>
              <!-- <p class="text-end">
                <router-link
                :to="{ name: 'DoctorForgotPassword' }"
                class="text-info small-text"
                >
                  Forgot Password
                </router-link>
              </p> -->
            </div>
            <hr>
            <div class="text-center">
              <vsud-button v-if="loading" :disabled="loading"
                class="my-4 mb-2"
                variant="gradient"
                color="info"
                full-width
              ><div class="spinner-grow spinner-grow-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              Signing in...</vsud-button>
  
              <vsud-button v-else
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
            :to="{ name: 'SignUp' }"
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
  
    <OTPModal :variant="danger" :visible="ShowModal" :email="user.email"/>
  
  </template>
  
  <script>
  // import Navbar from "@/examples/PageLayout/Navbar.vue";
  // import AppFooter from "@/examples/PageLayout/Footer.vue";
  import OTPModal from '@/components/modals/OTPModal.vue';
  import VsudInput from "@/components/VsudInput.vue";
  import VsudCheckbox from "@/components/VsudCheckbox.vue";
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
      VsudCheckbox,
      VsudButton,
      OTPModal
    },
    data() {
      return {
        bgImg,
        logoimg,
        ShowModal : false,
        rememberme: 0,
        loading: false,
        otploading: false,
        erroneous: false,
        otperror: false,
        emailsent: false,
        otpnotfilled: true,
        user: {
          email: "",
        },
        forotp: {
          email: "",
          otp: "",
        },
        otp: {
          one:"",two:"",three:"",four:"",five:"",six:"",
        }
      }
    },
    mounted() {
      //this.ShowModal=true;
    },
    beforeMount() {
      this.$store.state.hideConfigButton = true;
      body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
      body.classList.add("bg-gray-100");
    },
  
    methods: {
      login(ev) {
        ev.preventDefault();
        this.loading = true;
        this.$store
          .dispatch("login", this.user)
          .then((response) => {
            if (response.data.state==5) {
              this.sendemailotp();
            }
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
              }else{
                console.log(error.response.data.status);
                this.erroneous= true;
                document.getElementsByClassName("errormsg")[0].innerHTML=error.response.data.message;
              }
            }
          });
      },
      sendemailotp() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        inputs.forEach(function(inp){
          inp.value=''
        });
        this.$store
          .dispatch("sendemailotp", this.user)
          .then(() => {
            this.loading = false;
            //this.$swal('Great', response.data.message, 'success');
            setTimeout(() => 
              this.ShowModal=true
            , 1000);
            console.log('successful');
            
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            if (error.response) {
              //if (error.response.status === 422) {
                // errors.value = error.response.data.errors;
                console.log(error.response.data.status);
                this.erroneous= true;
                document.getElementsByClassName("errormsg")[0].innerHTML="Error encountered sending otp";
              //}
            }
          });
      },
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