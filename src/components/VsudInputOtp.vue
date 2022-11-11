<template>
  <form class="height-100 d-flex justify-content-center align-items-center">
      <div class="position-relative">
          <div class="card p-2 text-center">
              <h6>Please enter the one time password <br /></h6>
              <div><span> sent to</span> <small>+1******4343</small></div>
              <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                  <input class="m-2 text-center form-control rounded" type="text" id="input1" v-on:keyup="inputenter(1)" maxlength="1" />
                  <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(2)" type="text" id="input2" maxlength="1" />
                  <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(3)" type="text" id="input3" maxlength="1" />
                  <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(4)" type="text" id="input4" maxlength="1" />
                  <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(5)" type="text" id="input5" maxlength="1" />
                  <input class="m-2 text-center form-control rounded" v-on:keyup="inputenter(6)" type="text" id="input6" maxlength="1" />
              </div>
              <div class="mt-4"><button class="btn btn-danger px-4 validate">Validate</button></div>
              <div class="mt-3 content d-flex justify-content-center align-items-center"><span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3">Resend</a></div>
          </div>
      </div>
  </form>
</template>

<script>
export default {
  name: "VsudInputOtp",

  emits: ["update:modelValue"],
  methods: {
    inputenter(id) {
      const inputs = document.querySelectorAll('#otp > *[id]');
      for (let i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('keydown', function(event) {
              if (event.key === "Backspace") {
                  inputs[i].value = '';
                  if (i !== 0) inputs[i - 1].focus();
              } else {
                  if (i === inputs.length - 1 && inputs[i].value !== '') {
                      return true;
                  } else if (event.keyCode > 47 && event.keyCode < 58) {
                      inputs[i].value = event.key;
                      if (i !== inputs.length - 1) inputs[i + 1].focus();
                      event.preventDefault();
                  } else if (event.keyCode > 64 && event.keyCode < 91) {
                      inputs[i].value = String.fromCharCode(event.keyCode);
                      if (i !== inputs.length - 1) inputs[i + 1].focus();
                      event.preventDefault();
                  }
              }
          });
      }
    }
  },
};
</script>

<style scoped>
  .height-100 {
    height: 100vh;
  }
  .card {
    width: 400px;
    border: none;
    height: 300px;
    box-shadow: 0px 5px 20px 0px #6f1667;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card h6 {
    color: #6f1667;
    font-size: 20px;
  }
  .inputs input {
    width: 40px;
    height: 40px;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  .form-control:focus {
    box-shadow: none;
    border: 2px solid #6f1667;
  }
  .validate {
    border-radius: 20px;
    height: 40px;
    background-color: #6f1667;
    border: 1px solid #6f1667;
    width: 100%;
  }
  .content a {
    color: #d64f4f;
    transition: all 0.5s;
  }
  .content a:hover {
    color: #6f1667;
  }

</style>
