<template>
    <div class="card-body">
        <div v-show="erroneous" class="alert alert-danger errormsg"></div>

        <form role="form" class="text-start" @submit="register">
            <input v-model="user.email" type="hidden" name="email">

          <div v-show="step===2">
            <div class="d-flex p-2">
                <button type="button" @click="next(2)" class="wizard-btn ms-2 ms-sm-0" :class="(step===2) ? 'wizard-current-btn' : '' ">Personal Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(3)" class="wizard-btn ms-2 ms-sm-0" :class="(step===3) ? 'wizard-current-btn' : '' ">Medical Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(4)" class="wizard-btn ms-2 ms-sm-0" :class="(step===4) ? 'wizard-current-btn' : '' ">Finish Up</button>
            </div>

            <div class="row mt-3">

                <div class="col-md-12 mt-2 mt-sm-0">
                    <label for="" class="form-label-h">Name</label>
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <!-- <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="far fa-user"></i>
                          </span>
                            <input v-model="user.surname" class="form-control form-input-h" type="text" placeholder="Surname">
                        </div>
                    </div> -->
                    <!-- <vsud-input type="text" placeholder="Enter Sign up code" v-model="user.surname" /> -->
                    <input v-model="user.surname" class="form-control form-input-h" type="text" placeholder="Surname">
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <input v-model="user.firstname" class="form-control form-input-h" type="text" placeholder="First Name">
                </div>
                <div class="col-md-4 mt-2 mt-sm-0">
                    <input v-model="user.othername" class="form-control form-input-h" type="text" placeholder="Other names">
                </div>

                <div class="col-md-6 mt-2">
                    <label class="form-label-h">Date of birth</label>
                    <input v-model="user.dob" class="form-control form-input-h" type="text" placeholder="Date of birth">
                </div>
                <div class="col-md-6 mt-2">
                    <label class="form-label-h">City</label>
                    <input v-model="user.city" class="form-control form-input-h" type="text" placeholder="City">
                </div>
                <div class="col-md-6 mt-2">
                    <label class="form-label-h">Country</label>
                    <select v-model="user.country" name="country" class="form-control form-input-h">
                        <option value="">-Select--</option>
                        <option value="nigeria">Nigeria</option>
                    </select>
                </div>
                <div class="col-md-6 mt-2">
                    <label class="form-label-h">Phone</label>
                    <input v-model="user.phone" class="form-control form-input-h" type="text" placeholder="Phone Numner">
                </div>
                <div class="col-md-12 mt-2">
                    <label class="form-label-h">Employment Status</label>
                    <select v-model="user.employmentstatus" name="country" class="form-control form-input-h">
                        <option value="">-Select--</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>
            </div>

            <div class="pt-5 d-flex justify-content-end form-btn-hold-2">
                <button type="button" @click="prev()" class="previous"> &lt; &nbsp; &nbsp; Go Back </button>
                <button type="button" @click="next(3)" class="next ms-2">Next &nbsp; &nbsp;  &gt; </button>
            </div>

          </div>

          <div v-show="step===3">
            <div class="d-flex p-2">
                <button type="button" @click="next(2)" class="wizard-btn ms-2 ms-sm-0" :class="(step===2) ? 'wizard-current-btn' : '' ">Personal Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(3)" class="wizard-btn ms-2 ms-sm-0" :class="(step===3) ? 'wizard-current-btn' : '' ">Medical Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(4)" class="wizard-btn ms-2 ms-sm-0" :class="(step===4) ? 'wizard-current-btn' : '' ">Finish Up</button>
            </div>

            <div class="row mt-3">
                <div class="col-md-6 mt-2">
                    <label class="form-label-h">NPI</label>
                    <input v-model="user.npi" class="form-control form-input-h" type="text" placeholder="NPI">
                    <small>Use your individual NPI. Don’t know it? <a href="#">Click here</a></small>
                </div>

            </div>

            <div class="pt-5 d-flex justify-content-end form-btn-hold-2">
                <button type="button" @click="next(2)" class="previous"> &lt; &nbsp; &nbsp; Go Back </button>
                <button type="button" @click="next(4)" class="next ms-2">Next &nbsp; &nbsp;  &gt; </button>
            </div>

          </div>

          <div v-show="step===4">
            <div class="d-flex p-2">
                <button type="button" @click="next(2)" class="wizard-btn ms-2 ms-sm-0" :class="(step===2) ? 'wizard-current-btn' : '' ">Personal Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(3)" class="wizard-btn ms-2 ms-sm-0" :class="(step===3) ? 'wizard-current-btn' : '' ">Medical Details</button>
                <div class="d-none d-sm-block dash"></div>
                <button type="button" @click="next(4)" class="wizard-btn ms-2 ms-sm-0" :class="(step===4) ? 'wizard-current-btn' : '' ">Finish Up</button>
            </div>

            <div class="row mt-3">
                <div class="col-md-12 mt-2">
                    <label class="form-label-h">Password</label>
                    <input v-model="user.password" class="form-control form-input-h" type="password" placeholder="Enter Password">
                </div>
                <div class="col-md-12 mt-2">
                    <label class="form-label-h">Confirm Password</label>
                    <input v-model="user.password_confirmation" class="form-control form-input-h" type="password" placeholder="Retype Password">
                </div>

            </div>

            <div class="pt-5 d-flex justify-content-end form-btn-hold-2">
                <button type="button" @click="next(3)" class="previous"> &lt; &nbsp; &nbsp; Go Back </button>
                <button v-if="loading" class="next ms-2" :disabled="loading">
                  <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  Submit
                </button>
                <button type="submit" class="next ms-2">Submit</button>
            </div>

          </div>

        </form>
      </div>
</template>

<script>
import store from "@/store";
import VsudInput from "@/components/VsudInput.vue";

export default {
  name: "DRegisterForm",
  components: {
    VsudInput,
  },
  props: {
    mydata: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user: {
        email: this.mydata,
        which: this.which,
        firstname: "",
        surname: "",
        othername: "",
        phone: "",
        city: "",
        country: "",
        employmentstatus: "",
        npi: "",
        dob: "",
        password: "",
        password_confirmation: ""
      },
      which: '1',
      loading: false,
      step: 2,
      erroneous: false,
      emailsent: false,
    }
  },
  methods: {
    register(ev) {
      ev.preventDefault();
      this.loading = true;
      store
        .dispatch("dcontinueregister", this.user)
        .then(() => {
          this.loading = false;
          this.$router.push({
              name: "DoctorDashboard",
            })
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
    next(id){
        this.step=id;
    },
    prev(){
      this.$router.push({
        path: "select-type",
      })
    },

  },
};
</script>

<style scoped>

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