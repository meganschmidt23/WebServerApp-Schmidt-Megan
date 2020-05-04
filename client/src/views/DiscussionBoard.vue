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
                <img :src="profilePic">
             </p>
        </figure>
    <div class="media-content">
        <div class="content" :key="name" </div>
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