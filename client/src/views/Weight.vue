<template>
<section>
      <div class="container">
        <div class="notification" v-for="x in Weight.State.Weight" :key="x.Date">
            <td>Date: {{x.Date}} </td> <td> Weight: {{x.Weight}}</td>
            <button class="delete" @click="removeWeight(i)"></button>
        </div>
    </div>
    <div class= "container">
        <input class="input" type="text" placeholder="Today's date" v-model="newDate">
        <input class="input" type="text" placeholder="lbs" v-model="newWeight">
        <input class="button" type="submit" value="Submit input" @click="addWeight()">
    </div>    
  </section>
</template>

<script>
import Weight from '../models/Weight'
export default {
    data:() => ({
        Weight,
        newDate: "",
        newWeight: "",
    }),
    methods: {
    async addWeight(){
        try {
            await Weight.addWeight(this.newDate, this.newWeight)
        } catch (error) {
            this.error = error;
        }
    },
    async removeWeight(i){
        try {
            await Weight.removeWeight(i)
        } catch (error) {
            this.error = error
        }
    },
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