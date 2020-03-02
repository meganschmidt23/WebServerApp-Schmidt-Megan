<template>
  <div class="home">
    <img alt="Fitness App Logo" src="../assets/logo.jpg" height="256" width="200">
    <HelloWorld msg="Welcome to Your Fitness App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
