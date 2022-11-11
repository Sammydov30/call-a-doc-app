<template>
    <div class="dosage-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "DosageCard",
  components: {
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
    .dosage-card{
        padding: 20px 30px;
        background: #FFFFFF;
        box-shadow: 0px 10px 30px rgba(0, 60, 104, 0.15);
        border-radius: 16px;
        margin-top: 15px;
    }
    .bg-primary{
        background: #007FDD !important;
        color: #FFFFFF !important;
    }
</style>