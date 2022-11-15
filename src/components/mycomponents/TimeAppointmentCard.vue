<template>
    <div class="d-flex mt-2">
        <div class="time-a me-4"><span>{{time}}</span></div>
        <div v-if="appointment" class="appointment-main" :class="(type==1)? 'appointment-a' : 'appointment-b' ">{{description}}</div>
    </div>
</template>

<script>
export default {
  name: "TimeAppointmentCard",
  components: {
  },
  props: {
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    appointment: {
        type: Boolean,
        default: false,
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
    .time-a{
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.01em;
        color: #CBD2D9;
        display: flex;
        align-items: center;
    }
    .appointment-main{
        padding: 5px 10px 10px;
        border-radius: 10px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        text-align: center;
        letter-spacing: 0.01em; 
        display: flex;
        align-items: center;       
    }
    .appointment-a{
        background: #E3F8FF;      
        color: #1F2933;
    }
    .appointment-b{
        background: #FFE3E3;    
        color: #1F2933;
    }
</style>