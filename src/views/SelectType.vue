<template>

    <div class="mx-auto col-xl-6 col-lg-6 col-md-6 d-flex flex-column mt-5 form-area">
      <img :src="logoimg" alt="" class="img-fluid" style="width: 50px;">
      <div class="mt-5 form-contain card card-plain d-grid justify-content-center">
        <div class="pb-0 card-header text-start">
          <h4 class=" text-info text-dark">Welcome</h4>
          <p>Lets get to know you</p>
        </div>


        <div class="card-body">
          <div>
            
            <label id="patientdom" class="mt-2 d-flex selection" :class="(which === '1' ? 'selection-selected' : '')" 
            for="patient" >
                <div class="p-3">
                    <input class="radio-section" type="radio" id="patient" name="which" value="1" v-model="which">
                </div>
                <div class="p-3">
                    <h6 class="selection-title">I'm a Patient</h6>
                    <p class="selection-subtitle">Get access to over 1000+ specialist to ensure you have a sound health</p>
                </div>
            </label>
            <label id="doctordom" class="mt-2 d-flex selection" :class="(which === '2' ? 'selection-selected' : '')"  for="doctor">
                <div class="p-3">
                    <input class="radio-section" type="radio" id="doctor" name="which" value="2" v-model="which">
                </div>
                <div class="p-3">
                    <h6 class="selection-title">I'm a Doctor</h6>
                    <p class="selection-subtitle">Meet with patients and provide the required solution to their health problems</p>
                </div>
                
            </label>

            <div class="pt-4 d-flex justify-content-between" style="width: 340px;">

              <button type="button" @click="next()" class="next float-right">Next > </button>
            </div>

          </div>
      </div>
      
  
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
  import SelectDorC from "@/components/forms/SelectDorC.vue";
  import bgImg from "@/assets/img/bg/bg-2.jpg";
  import logoimg from "@/assets/img/logo.png";
  const body = document.getElementsByTagName("body")[0];
  export default {
    name: "SelectDorC",
    components: {
      SelectDorC
    },
    data() {
      return {
        bgImg,
        logoimg,
        user: {
          email: this.$route.query.email,
        },
        which: '1',
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
      next(){
        if (this.which=='1') {
            this.$router.push({
              path: "patient/continue-registration",
              query: { email: this.user.email, status: '1' }
            })
        } else if (this.which=='2') {
            this.$router.push({
              path: "doctor/continue-registration",
              query: { email: this.user.email, status: '1' }
            })
        }
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



  .selection{
    width: 350px;
    height: 114px;
    background: #FFFFFF;
    border: 1px solid #9AA5B1;
    box-shadow: 2px 2px 24px rgba(37, 37, 37, 0.08);
    border-radius: 10px;
    cursor: pointer;
}
.selection-selected{
    border: 1px solid #007FDD;
}
.radio-section{
    height: 100%;
    width: 20px;
}
.selection-title{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #1F2933;
}
.selection-subtitle{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #7B8794;
}
.next{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /**padding: 14px 34px 14px 30px;*/
    gap: 14px;
    width: 112px;
    height: 38px;
    color: #FFFFFF;
    background: #007FDD;
    border: 0;
    border-radius: 320px;
}

.previous{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    min-width: 112px;
    height: 38px;
    color: #007FDD;
    background: #FFFFFF;
    border: 1px solid #007FDD;
    border-radius: 320px;
}
.wizard-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 12px;
    width: 130px;
    height: 34px;
    border: 1px solid #52606D;
    background: #FFFFFF;
    color: #52606D;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
}
.wizard-current-btn{
    background: #52606D;
    color: #FFFFFF;
}
.dash{
    background: rgb(82, 96, 109);
    width: 20px;
    height: 2px;
    margin-top: 15px;
}
.form-input-h{
    padding: 6px 30px;
    gap: 20px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #9AA5B1;
    border-radius: 10px;
}
.form-label-h{
    font-weight: 400;
}


@media (min-width: 1200px){
    .form-btn-hold-2{
        width: 600px;
    }
}
  </style>