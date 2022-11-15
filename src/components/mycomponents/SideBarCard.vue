<template>
    <div class="d-flex justify-content-between mt-2">
        <div class="mt-4 ps-4"><a class="arrow-rightt" href="#"><i class="fa fa-chevron-right"></i></a></div>
        <div class="px-4"><a class="opptions" href="#">...</a></div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
        <div class="profileimg text-center">
            <img :src="profileimg" alt="">
        </div>
    </div>
    <div class="row d-flex justify-content-center mt-4">
        <div class="button-edit text-center">
            <a href="#"><i class="fa fa-edit"></i> Edit Profile</a>
        </div>
    </div>

    <!-- Calendar here -->
    <div class="row d-flex justify-content-center mx-2">
        <CalendarCard></CalendarCard>
    </div>
</template>

<script>
import CalendarCard from '@/components/mycomponents/CalendarCard.vue'
import profileimg from "@/assets/img/profileimg.png";
export default {
  name: "SideBarCard",
  components: {
    CalendarCard,
  },

  data() {
    return {
        profileimg,
    }
  },
  methods: {

  },
};
</script>


<style scoped>
    .arrow-rightt{
        font-size: 13px;
        color: #1f2933;
    }
    .opptions{
        font-size: 29px;
        color: #1f2933;
    }
    .profileimg{

    }
    .profileimg img{
        width: 150px;
    }
    .button-edit a{
        padding: 10px 22px;
        width: 140px;
        height: 39px;
        background: #007FDD;
        border-radius: 320px;
        color: #FFFFFF !important;
        font-size: 13px !important;
    }
    .maggi{

    }
</style>