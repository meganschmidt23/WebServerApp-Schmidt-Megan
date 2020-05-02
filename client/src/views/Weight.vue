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
        <div class="notification" v-for="x in weights" :key="x.Weight">
            {{x.Weight}}
        </div>
    </div>
    <div class="column">
       Weight:
       <div class="control">
            <input class="input" type="text" placeholder="lbs" v-model="Weight">
        </div>
    </div>
  </div>
  <input class="button" type="submit" value="Submit input" @click="addWeight()">
  </section>
</template>

<script>
import Weight from '../models/Weight'
export default {
    data: {
        weights: Weight.State.Weight,
        date: "",
        weight: "",
    },
    methods: {
        addWeight() {
            this.weights.push({date, weight})
        }

    },
    created(){
        Weight.Init()
    }

}
</script>

<style scoped lang="scss">
column{
    background-color:palevioletred
}
</style>