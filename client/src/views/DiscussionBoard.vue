<template>
<section>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <h1 class="title"> Discussion Board</h1>
                <h2 class="subtitle">Welcome! Please post any suggestions or comments on this page</h2>
        </div>
     </div>
    </section>
    <article class="media" v-for="x in DiscussionBoard.State.DiscussionBoard" :key="x.post">
        <figure class="media-left">
            <p class="image is-64x64">
                <img :src="x.profilePic">
             </p>
        </figure>
        <div class="media-content">
            <p class="title is-4"> {{x.name}}</p>
        </div>
        <div class="content">
            {{x.post}}
        </div>    
        <div class="media-right">
            <button class="delete" @click="removePost"></button>
        </div> 
    </article>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="http://cs.newpaltz.edu/~schmidtm6/pics/ducky.jpg">
             </p>
        </figure>
        <div class="media-content">
            <p class="title is-4">John Smith</p>
        </div>
        <div class="content">
            <textarea class="textarea" placeholder="Post your comment!" v-model="newPost"></textarea>
            <input class="button" type="submit" @click="addPost()">
        </div>    
        <div class="media-right">
            <button class="delete" @click="removePost(i)"></button>
        </div> 
    </article>
</section>
</template>

<script>
//import {CurrentUser} from '../models/Users'
import DiscussionBoard from '../models/DiscussionBoard'
export default {
  data:()=>({
    posts: DiscussionBoard.State.DiscussionBoard,
    newPost:"",
    DiscussionBoard,
    name: "John Smith",
    profilePic: "http://cs.newpaltz.edu/~schmidtm6/pics/ducky.jpg"
    //CurrentUser
  }),
  methods: {
    async addPost(){
        try {
            await DiscussionBoard.addPost(this.name, this.profilePic, this.newPost);
        } catch (error) {
            this.error = error;
        }
    },
    async removePost(i){
        try {
            await DiscussionBoard.removePost(i)
        } catch (error) {
            this.error = error
        }
    },
  },
  created(){
        DiscussionBoard.Init()
    }
  }
</script>

<style>

</style>