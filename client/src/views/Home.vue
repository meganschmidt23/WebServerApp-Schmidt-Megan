<template>
  <div class="home">
    <img alt="Fitness App Logo" src="../assets/logo.jpg" height="256" width="200">
    <h1 class="title is-1">Welcome to Your Fitness App</h1>
    <HelloWorld msg="Hi, gorgeous! Are you ready to flex those muscles?"/>
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
