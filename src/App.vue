<template>

  
  <Navbar v-if="!$route.meta.hideNavbar" />
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },

  setup() {
    
  },
}
</script>


