<template>
    <div class="row mt-5">
        <div class="col-lg-6">
            <div class="ca-colunm-header d-flex justify-content-between">
                <h6 class="ca-title">Appointments <span class="ca-badge ca-badge-error">3</span></h6>
                <a href="#" class="text-end text-primary">View all</a>
            </div>
            <div class="ca-column-body mt-4">
                <h6 class="ca-when">Today</h6>
                <AppointmentCard name="Dr Ubong Akpan" adate="12:23pm" location="Specialist clinic, Port Harcourt" :image="docimg"/>
                <AppointmentCard name="Dr Ubong Akpan" adate="12:23pm" location="Specialist clinic, Port Harcourt" :image="docimg"/>
            </div>
        </div>
        <div class="col-lg-6 px-5">
            <div class="ca-colunm-header d-flex justify-content-between">
                <h6 class="ca-title">Dosages </h6>
                <a href="#" class="text-end text-primary">View all</a>
            </div>
            <div class="ca-column-body mt-3">
                <h6 class="ca-when">Today</h6>
                <dosage-card>
                    <PillCard name="Panadol" description="2 pills daily" adate="Oct 6th, 2022" :image="pillimg"/>
                    <PillCard name="Panadol" description="2 pills daily" adate="Oct 6th, 2022" :image="pillimg"/>
                </dosage-card>
            </div>
        </div>
        <div class="col-12 px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui harum aspernatur rerum illo. Laudantium veniam magnam, excepturi, 
            esse eveniet mollitia possimus quod repudiandae, expedita aperiam nulla! Officiis, molestias nemo?
        </div>
      </div>
</template>

<script>
import PillCard from '@/components/mycomponents/PillCard.vue'
import AppointmentCard from "@/components/mycomponents/AppointmentCard.vue";
import docimg from "@/assets/img/team-1.jpg";
import pillimg from "@/assets/img/pill.png";
import DosageCard from '@/components/mycomponents/DosageCard.vue';
export default {
  name: "DoctorDashboard",
  components: {
    PillCard,
    AppointmentCard,
    DosageCard,
  },
  data() {
    return {
        docimg,
        pillimg,
    }
  },
  methods: {

  },
};
</script>


<style scoped>
.ca-title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #1F2933;
    
}
.ca-badge{
    color: #ffffff;
    border-radius: 100%;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin-top: -35px;
    margin-left: 100%;
    height: 20px;
    width: 20px;
    align-content: center;
    display: grid;
    
}
.ca-badge-error{
    background: #CF1124;
}
.ca-when{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #1F2933;
    
}
.text-primary{
    color: #007FDD !important;
}
</style>