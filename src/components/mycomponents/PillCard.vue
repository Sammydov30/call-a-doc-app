<template>
    <div class="d-flex my-2 py-3">
        <div class="a-image">
            <img :src="image" class="img-fluid">
        </div>
        <div class="a-texts pt-4">
            <p class="name">{{name}}</p>
            <p class="description">{{description}}  <span class="adate ms-4">{{adate}}</span></p>
        </div>
    </div>
</template>

<script>
export default {
  name: "PillCard",
  components: {
  },
  props: {
    image: {
        type: String,
        default: "@/assets/img/pill.png"
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    adate: {
        type: String,
        required: true,
    },
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
        line-height: 10px;
        color: #3E4C59;
    }
    .a-texts .adate{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 0px;
        color: #52606D;
    }
    .a-texts .description{
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
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