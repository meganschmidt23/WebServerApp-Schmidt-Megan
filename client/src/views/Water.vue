<template>
    <section>
        <h1 class="title">Daily Water Intake</h1>

        <h2 class="subtitle"> Suggested intake is 75 ounces of water for 150 lb person. </h2>
        <figure class="image is-128x128">
           <img src="https://s3.envato.com/files/250136728/IMG_9444.jpg">
        </figure>   
        <progress class="progress is-large" :value="water" max="75"></progress>
            <h1>Total: {{water}} ounces </h1>
                <div class="control">
                     <label class="button">
                        <input type="submit" name="water" value="1 ounce" @click="plus1()" >
                    </label>
                     <label class="button">
                         <input type="submit" name="water" value="5 ounces" @click="plus5()" >
                     </label>
                    <label class="button">
                        <input type="submit" name="water" value="10 ounces" @click="plus10()" >
                     </label>
                    <label class="button">
                         <input type="submit" name="water" value= "20 ounces" @click="plus20()" >
                    </label>
                 </div>
    </section>    
</template>

<script>
import Water from '../models/Water'

export default {
    data: () => ({
        water: Water.State.Water[0].watertotal, //index of where you're looking,
        i: CurrentUser.userID
    }),
    methods: {
        async add1(){
        try {
            await Water.add1()
        } catch (error) {
            this.error = error;
        }
    },
    },
    created(){
        Water.Init()
    }
}
</script>