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
                <img :src="image">
             </p>
        </figure>
        <div class="media-content">
            <p class="title is-4">{{name}}</p>
        </div>
        <div class="content">
            <b-field label="Create a new post">
            <b-autocomplete
                rounded
                v-model="newPost"
                :data="filteredDataArray"
                placeholder="Post your comment!"
                icon="magnify"
                clearable
                @select="option => selected = option">
            </b-autocomplete>
            </b-field>
            <input class="button" type="submit" @click="addPost()">
        </div>    
        <div class="media-right">
            <button class="delete" @click="removePost(i)"></button>
        </div> 
    </article>
</section>
</template>

<script>
import DiscussionBoard from '../models/DiscussionBoard'
export default {
  data:()=>({
    newPost:"",
    selected= '',
    DiscussionBoard,
    image: DiscussionBoard.State.currUser.profilePic,
    name: DiscussionBoard.State.currUser.Name
  }),
  computed: {
        filteredDataArray() {
            return DiscussionBoard.State.currUser.post.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        },
  methods: {
    async addPost(){
        try {
            await DiscussionBoard.addPost(this.newPost);
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