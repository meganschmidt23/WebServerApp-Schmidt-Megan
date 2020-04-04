<template>
<section>
  <div class="columns is-gapless">
      <div class="container">
        <div class="notification" v-for="x in weights" :key="x.date">
            {{x.date}}
        </div>
    </div>
    <div class="column">
        Date: 
        <div class="control">
            <input class="input" type="text" placeholder="Today's date" v-model="date">
        </div>
    </div>
    <div class="container">
        <div class="notification" v-for="x in weights" :key="x.weight">
            {{x.weight}}
        </div>
    </div>
    <div class="column">
       Weight:
       <div class="control">
            <input class="input" type="text" placeholder="lbs" v-model="weight">
        </div>
    </div>
  </div>
  <input class="button" type="submit" value="Submit input" @click="addWeight()">
  </section>
</template>

<script>
export default {
    data: {
        weights: [],
        date: "",
        weight: "",
    },
    methods: {
        addWeight() {
            this.weights.push({date, weight})
        }

    }

}
</script>

<style scoped lang="scss">
column{
    background-color:palevioletred
}
</style>