
<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="https://i.etsystatic.com/17285564/r/il/40c798/1615497192/il_570xN.1615497192_tmo2.jpg" width="120" height="90">
    </a>

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">


      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
      <router-link to="/exercises" class="navbar-item" active-class="is-current">Exercises</router-link>
      <router-link to="/discussionboard" class="navbar-item" active-class="is-current">Discussion Board</router-link>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Let's Get Physical
        </a>

        <div class="navbar-dropdown">
          <router-link to="/weight" class="navbar-item" active-class="is-current" exact>Weight</router-link>
          <router-link to="/water" class="navbar-item" active-class="is-current" exact>Water</router-link>
          <router-link to="/food" class="navbar-item" active-class="is-current" exact>Food Tracking</router-link>
          <router-link to="/goals" class="navbar-item" active-class="is-current" exact>Goals</router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data: ()=>({
    isOpen: false
  })
}
</script>

<style>
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
</style>