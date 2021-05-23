<template>
       <!-- <lottie :width="1024" :height="1024" :options="lottieOptions" v-on:animCreated="handleAnimation" /> --> 
        <lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
</template>
<style>
</style>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "../assets/login_animation.json";
export default {
    components: {
    lottie
  },
  data() {
    return {
      anim: null, // firts value
      lottieOptions: { animationData: animationData.default }
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>