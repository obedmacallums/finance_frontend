<template>

  
  <Navbar v-if="!$route.meta.hideNavbar" class='sticky top-0' />
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


