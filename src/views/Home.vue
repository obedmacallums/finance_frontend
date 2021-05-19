<template>

<div class="home">

  <Card description="Pastilla anticonceptiva"
        amount="-15000"
        item="FARMACIA Y SALUD"
        color="blue"
        intensity="100"
        class="m-3 mb-4"
  
  />

  <Card description="Compras en el lider"
      amount="-32988"
      item="Spuermercado"
      color="red"
      intensity="200"
      class="m-3 mb-4"

/>


</div>



  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, Card
  }
}
</script>

