<template>
  <section>
    <h1 class="title">Enter your login information:</h1>  
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
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
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
  </div>
  <div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
  </div>
   <figure class="image is 60x20">
      <img src="https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg">
    </figure>
 </section> 
</template>

<script>
import { Login } from "../models/Users";
export default {
    data(){
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            try {
                Login(this.email, this.password);
                this.$router.push('/game');
            } catch (error) {
                this.error = error;
            }
        }
    }
}
</script>