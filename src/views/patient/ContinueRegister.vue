<template>

  <div class="mx-auto col-xl-6 col-lg-6 col-md-6 d-flex flex-column mt-5 form-area">
    <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
    <div class="mt-5 form-contain card card-plain d-grid justify-content-center">
      <div class="pb-0 card-header text-start">
        <h4 class=" text-info text-dark">Welcome</h4>
        <p>Lets get to know you</p>
      </div>
      <PatientRegisterForm v-if="$route.query.status==='1'" :mydata="$route.query.email"/>

    </div>
  </div>

  <div class="col-md-6 no-p-m d-none d-md-block">
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
// import store from "../store";
import PatientRegisterForm from "@/components/forms/PatientRegisterForm.vue";
import bgImg from "@/assets/img/bg/bg-2.jpg";
import logoimg from "@/assets/img/logo.png";
const body = document.getElementsByTagName("body")[0];
export default {
  name: "PContinueRegisterPage",
  components: {
    PatientRegisterForm
  },
  data() {
    return {
      bgImg,
      logoimg,

    }
  },
  created() {
    if (this.$route.query.status!=='1') {
      this.$swal('Un Authorized', 'Email not verified!', 'error');
      setTimeout(() => 
        this.$router.push({
          name: "SignUp",
        })
      , 1000);
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
    padding-right: 10px !important;
    padding-left: 10px !important;
  }
  .myp{
    padding-top: 1.2rem !important;
    padding-bottom: 1.2rem !important;
  }

}
</style>