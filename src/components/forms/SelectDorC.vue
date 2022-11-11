<template>
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
</template>

<script>

export default {
  name: "SelectDorC",
  components: {

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
      },
      which: '1',
    }
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