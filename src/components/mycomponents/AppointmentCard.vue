<template>
    <div class="appoint-card d-flex justify-content-between">
        <div class="a-image">
            <img :src="image" class="img-fluid">
        </div>
        <div class="a-texts mt-3">
            <p class="name">{{name}}</p>
            <span class="adate">{{adate}}</span>
            <p class="location">{{location}}</p>
        </div>
        <div class="a-btn">
            <button class="bg-primary">Join</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "AppointmentCard",
  components: {
  },
  props: {
    image: {
        type: String,
        default: "@/assets/img/logo.png"
    },
    name: {
        type: String,
        required: true,
    },
    adate: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
};
</script>


<style scoped>
    .appoint-card{
        padding: 20px 10px;
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(0, 60, 104, 0.15);
        border-radius: 16px;
        margin-top: 15px;
    }
    .a-image{
        align-content: center;
        display: grid;
        padding: 10px 5px;
    }
    .a-image img{
        width: 50px;
        border-radius: 100%;
    }
    .a-texts{
        padding: 0 5%;
    }
    .a-texts .name{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 0px;
        color: #3E4C59;
    }
    .a-texts .adate{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #1992D4;
    }
    .a-texts .location{
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #52606D;
    }
    .a-btn{
        padding: 0 2% 0 10%;
        display: grid;
        align-content: center;
    }
    .a-btn button{
        padding: 10px 28px;
        width: 84px;
        height: 39px;
        border-radius: 320px;
        line-height: 0;
        border: 1px;
    }
    .bg-primary{
        background: #007FDD !important;
        color: #FFFFFF !important;
    }
</style>