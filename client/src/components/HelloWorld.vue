<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For some simple inspiration or ideas on different areas of the body to target, make sure to check out our
      <a href=".../views/Exercises.vue">Exercise page</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
