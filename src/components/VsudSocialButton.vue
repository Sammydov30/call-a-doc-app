/* eslint-disable prettier/prettier */
<template>
  <a v-if="href" :href="href" class="btn btn-outline-primary sbtn" :class="getClasses(color)">
    <slot></slot>
  </a>
  <router-link v-else-if="to" :to="to" class="btn btn-outline-primary sbtn" :class="getClasses(color)">
    <slot></slot>
  </router-link>
  <button v-else class="btn btn-outline-primary sbtn" :class="getClasses(color)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VsudSocialButton",
  props: {
    color: {
      type: String,
      default: "blue",
    },
    to: [Object, String],
    href: String,
    link: {
        type: Boolean,
        default: false,
    },
  },

  methods: {
    getClasses: (color) => {
      let colorValue;
      // Setting the button variant and color
      if (color === "blue") {
        colorValue = `blue`;
      } else if (color === "black") {
        colorValue = `black`;
      } else {
        colorValue = ``;
      }
      return `${colorValue}`;
    },
  },
};
</script>

<style scoped>
    .sbtn{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 54px 6px 30px;
        gap: 20px;
        width: 100% !important;
        height: 42px;
        border-radius: 10px;
    }
    .blue{
        border: 1px solid #007FDD;
        color: #007FDD;
    }
    .blue:hover:not(.active) {
        border: 1px solid #007FDD;
        color: #007FDD;
      }
    .black{
        border: 1px solid #1F2933;
        color: #1F2933;
    }
    .black:hover:not(.active){
        border: 1px solid #1F2933;
        color: #1F2933;
    }
</style>
