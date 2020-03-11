<template>
  <section class="hero">
    <div class="hero-body">
        <div class="container">
          <h1 class="title">Food Tracking</h1>
          <h2 class="subtitle">Make sure to include the different foods you eat throughout the day</h2>
        </div>
        <div class="notification">
            <i class="fas fa-bacon"></i>
                <strong>   Breakfast</strong>
            <div class="media-content">
                <input class="button" type="submit" value="Add another item" @click="addBreakfast()"></div>
        </div>
    </div> 
    <div class="hero-body">   
    <div class="container">  
      <div class="notification">
            <i class="fas fa-hamburger"></i>
                <strong>   Lunch</strong>
            <div class="media-content">
                <input class="button" type="submit" value="Add another item" @click="addLunch()"></div>
            </div>
      </div> 
    </div>
    <div class="hero-body">
    <div class="container">  
      <div class="notification">
            <i class="fas fa-drumstick-bite"></i>
                <strong>   Dinner</strong>
            <div class="media-content">
                <input class="button" type="submit" value="Add another item" @click="addDinner()"></div>
            </div>
    </div> 
    </div>
    <div class="hero-body">
    <div class="container">  
      <div class="notification">
            <i class="fas fa-cookie"></i>
                <strong>   Snacks</strong>
            <div class="media-content" id="Snacks">
                <div class="notification is-primary">
                  <button class="delete" @click="remove(i)"></button>
                  </div>
                <input class="input" type="text" placeholder="Text input">
                <input class="button is-primary is-light" type="submit" value="Add another item" @click="addSnack()"></div>
            </div>
    </div> 
    </div>
  </section>
</template>


<script>
import {Users, addBreakfast, addLunch, addDinner, addSnack} from "../models/Users";
export default{
  data:()=>({
    User,
    Breakfast,
    Lunch,
    Dinner,
    Snacks
  }),
}

</script>