<template>
  <section class="hero">
    <div class="hero-body">
        <div class="container">
          <h1 class="title">Food Tracking</h1>
          <h2 class="subtitle">Make sure to include the different foods you eat throughout the day</h2>
        </div>
        <div class="notification">
            <i class="fas fa-bacon"></i><i class="fas fa-hamburger"></i><i class="fas fa-drumstick-bite"></i><i class="fas fa-cookie"></i>
                <strong>Daily Food Intake</strong>
                <section class="section">
                  <div class="container" v-for="x in todos" :key="x.name">
                      <h1>{{x.name}}</h1>
                  </div>
                </section>  
            <div class="media-content">
              <input class="input" type="text" placeholder="Food item" v-model="newFood">
                <input class="button" type="submit" value="Add another item" @click="addFood(newFood)"></div>
        </div>
    </div> 
  </section>
</template>


<script>
import {todos, addFood} from "../models/Food"
export default{
  data:()=>({
    todos,
    newFood:""
  }),
  methods: {
    addFood
    }
  }

</script>