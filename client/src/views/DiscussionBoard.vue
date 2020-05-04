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
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="http://cs.newpaltz.edu/~schmidtm6/pics/ducky.jpg">
             </p>
        </figure>
        <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
        </div>
        <div class="content">
            Hi everyone!
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
            <p class="subtitle is-6">@johnsmith</p>
        </div>
        <div class="content">
            <textarea class="textarea" placeholder="Post your comment!"></textarea>
            <input class="button" type="submit" value="Post">
        </div>    
        <div class="media-right">
            <button class="delete" @click="removePost"></button>
        </div> 
    </article>
</section>
</template>

<script>
import DiscussionBoard from '../models/DiscussionBoard'
export default {
  data:()=>({
    goals: DiscussionBoard.State.DiscussionBoard,
    newPost:""
  }),
  methods: {
    async addPost(name, profilePic, post){
        try {
            await DiscussionBoard.State.DiscussionBoard.addPost(name, profilePic, post)
        } catch (error) {
            this.error = error;
        }
    },
    async deletePost(i){
        try {
            await DiscussionBoard.State.DiscussionBoard.removePost(i)
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