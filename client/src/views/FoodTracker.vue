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
                  <div class="container" v-for="x in Food.State.Food" :key="x.name">
                    <table class="table">
                     <td> Food: {{x.name}}</td> <td>Calories: {{x.calories}} </td>
                     <button class="delete" @click="deleteFood(i)"></button>
                    </table>  
                   </div> 
                </section>    
            <div class="media-content">
              <input class="input" type="text" placeholder="Food item" v-model="newFood">
              <input class="input" type="text" placeholder="Calories" v-model="newCalories">
              <input class="button" type="submit" value="Add another item" @click="addFood()"></div>
        </div>
    </div> 
  </section>
</template>


<script>
import Food from "../models/Food"
export default{
  data:()=>({
    food: Food.State.Food,
    newFood:"",
    newCalories: 0,
    Food
  }),
  methods: {
        async addFood(){
        try {
            await Food.addFood(this.newFood, this.newCalories)
        } catch (error) {
            this.error = error;
        }
    },
    async deleteFood(i){
        try {
            await Food.removeFood(i)
        } catch (error) {
            this.error = error
        }
    }},
    created(){
        Food.Init()
    }
  }
</script>