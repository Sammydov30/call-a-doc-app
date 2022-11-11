<template>
    <ModalDefaultVue  variant="variant" :visible="visible">        
        <form class="height-100 d-flex justify-content-center align-items-center" @submit="checkemailotp">
            <div class="position-relative">
                <div class="card g p-2 text-center">
                    <h6>An OTP was sent to your email <br /></h6>
                    <div><span>Input the six (6) digit number</span></div>
                    <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                        <input class="m-2 text-center form-control f rounded" v-model="otp.one" v-on:keyup="inputenter(1)" type="text" id="input1" maxlength="1" />
                        <input class="m-2 text-center form-control f rounded" v-model="otp.two" v-on:keyup="inputenter(2)" type="text" id="input2" maxlength="1" />
                        <input class="m-2 text-center form-control f rounded" v-model="otp.three" v-on:keyup="inputenter(3)" type="text" id="input3" maxlength="1" />
                        <input class="m-2 text-center form-control f rounded" v-model="otp.four" v-on:keyup="inputenter(4)" type="text" id="input4" maxlength="1" />
                        <input class="m-2 text-center form-control f rounded" v-model="otp.five" v-on:keyup="inputenter(5)" type="text" id="input5" maxlength="1" />
                        <input class="m-2 text-center form-control f rounded" v-model="otp.six" v-on:keyup="inputenter(6)" type="text" id="input6" maxlength="1" />
                    </div>
                    <div v-show="otperror" class="otperrormsg">The Code you entered was wrong. Try again</div>
                    <div class="mt-3 content d-flex justify-content-center align-items-center">
                      <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3" @click="sendemailotp()">Resend</a>
                    </div>
                    <center>
                      <div class="mt-4" v-if="otploading"><button type="submit" disabled="" class="px-4 validate validate-disabled">Submitting...</button></div>
                      <div class="mt-4" v-else><button type="submit" :disabled="otpnotfilled" :class="(otpnotfilled)? 'validate-disabled':''" class="px-4 validate">Submit</button></div>
                     
                    </center>
                    
                </div>
            </div>
        </form>
    </ModalDefaultVue>
    
</template>
    
<script>
    import ModalDefaultVue from './ModalDefault.vue';
    export default {
        name: 'OTPModal',
        components:{
            ModalDefaultVue,
        },
        props: {
            // title: String,
            variant: String,
            visible: Boolean,
            email: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                otploading: false,
                otperror: false,
                otpnotfilled: true,
                forotp: {
                    email: "",
                    otp: "",
                },
                otp: {
                    one:"",two:"",three:"",four:"",five:"",six:"",
                }
            }
        },
        methods: {
            checkemailotp(ev) {
                ev.preventDefault();
                this.forotp.otp=String(this.otp.one)+String(this.otp.two)+String(this.otp.three)+String(this.otp.four)
                +String(this.otp.five)+String(this.otp.six);
                this.forotp.email=this.email;
                this.otploading = true;
                this.$store
                .dispatch("checkemailotp", this.forotp)
                .then((response) => {
                    this.loading = false;
                    this.$swal('Great', response.data.message, 'success');
                    var dashboard=(response.data.role=="1")? "PatientDashboard" : "DoctorDashboard";
                    setTimeout(() => 
                    this.$router.push({
                        name: dashboard,
                    })
                    , 1000);
                    console.log('successful');
                    
                })
                .catch((error) => {
                    this.otploading = false;
                    console.log(error);
                    if (error.response) {
                        console.log(error.response.data.status);
                        this.otperror= true;
                        document.getElementsByClassName("otperrormsg")[0].innerHTML=error.response.data.message;
                    }
                });
            },
            inputenter(id) {
                const inputs = document.querySelectorAll('#otp > *[id]');
                var i=id-1;
                if (i !== inputs.length - 1) inputs[i + 1].focus();
        
                var otpnotfilled;
                inputs.forEach(function(inp){
                    if(inp.value!==''){ otpnotfilled=false }
                    if(inp.value==''){ otpnotfilled=true }
                //console.log(otpnotfilled);
                });
                this.otpnotfilled=otpnotfilled;
            }
    },
    
    }
</script>

<style scoped>
@media (min-width: 1200px){
  /**OTP**/

  .height-100 {
    height: 100vh;
  }

  .g{
    gap: 10px;
    width: 500px;
    height: 387px;
    background: #FFFFFF;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
  }

  .g h6 {
    color: #6f1667;
    font-size: 20px;
  }
  .inputs input {
    width: 40px;
    height: 40px;
    border-radius: 10px !important;
    padding-left: 10px !important;
    padding-right: 10px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  .f:focus {
    box-shadow: none;
    border: 1px solid #007FDD;
  }
  .otperrormsg{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    gap: 15px;
    width: 380px;
    height: 46px;
    background: #EF4E4E;
    color: #FFFFFF;
    font-size: 12px;
    border-radius: 10px;
    align-self: center;
  }
  .validate {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 12px 48px;
    width: 171px;
    height: 54px;
    background: #3EBD93;
    border-radius: 320px;
    border: 0;
    color: #fff;
  }
  .validate-disabled {
    background: #3EBD937D;
  }
  .content a {
    color: #d64f4f;
    transition: all 0.5s;
  }
  .content a:hover {
    color: #6f1667;
  }
}
</style>