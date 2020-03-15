<template>
  <section>
    <h1 class="title">Enter your login information:</h1>  
  <form class="container" @submit.prevent="login"> 
    <p class="has-text-centered">{{ error }}</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Username" v-model="username">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
  </div>
  <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="text" placeholder="Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
  </div>
  <div class="field">
  <p class="control">
    <button class="button is-info">
      Login
    </button>
  </p>
  </div>
   <figure class="image is 60x20">
      <img src="https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg">
    </figure>
    </form>
 </section> 
</template>

<script>
import { Login } from "../models/Users";

export default {
    data: () => ({
            username: '',
            password: '',
            error: ''
    }),
    methods: {
        login() {
            try {
                Login(this.username, this.password);
                this.$router.push("/profile");
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>