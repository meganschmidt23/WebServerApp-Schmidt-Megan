<template>
    <section>
        <section class="hero">
            <div class="hero-body">
                <div class="container">    
                    <h1 class="title">
                        <i class="fas fa-bullseye"></i>
                                 Goals
                    </h1>
                    <h2 class="subtitle">
                        Here's a great place to set specific, measurable goals. Make sure to give yourself a time-frame to complete the goal by. You can do it, gorgeous!
                    </h2>
                    <figure class="image is-128x128">
                        <img src="https://previews.123rf.com/images/pokki1/pokki11611/pokki1161100089/68689472-modern-lettering-phrase-if-you-can-dream-it-you-can-do-it-inscriptions-and-quotes-for-layout-and-tem.jpg">
                    </figure>
                </div>
            </div>
                <div class="container" v-for="x in todos" :key="x.goal">
                    <h1>{{x.goal}}</h1>
                </div>  
            <div class="media-content">
                <input class="input" type="text" placeholder="Stay strong, Gorgeous" v-model="newGoal">
                    <input class="button" type="submit" value="Add another item" @click="addGoal(newGoal)"></div>
    

        </section>
     </section>
</template>


<script>
import {User} from "../models/Users";
import {todos, addGoal} from "../models/Goals"
export default{
  data:()=>({
    User,
    todos,
    newGoal:""
  }),
  methods: {
    addGoal
    }
  }

</script>