<template>
 <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        About Us
      </h1>
      <figure class="image is-128x128">
        <img :alt="name" :src="image" height="256" width="200">
      </figure>
      <h2 class="subtitle">
        Who am I?
      </h2>
      <p> My name is Megan, and I'm a Computer Science graduate student at SUNY New Paltz.</p>
      <p> For one of my classes, Web Server Programming, we are making a Fitness App. </p>
      <p> If you have any questions or comments, feel free to send me an email :</p> <a href="mailto:schmidtm6@hawkmail.newpaltz.edu?subject=Fitness%20App%20Comment">schmidtm6@hawkmail.newpaltz.edu</a>
    </div>
  </div>
</section>
</template>

<script>

import About from "../models/About"

export default {
  data: () => ({
    image: About.State.Picture[0].imgSrc,
    name: About.State.Picture[0].imgName
  }),
  methods: {},
  created() {
    About.Init()
  }
}
</script>