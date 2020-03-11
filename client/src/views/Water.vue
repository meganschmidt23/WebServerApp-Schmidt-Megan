<template>
    <section>
        <h1 class="title">Daily Water Intake</h1>
        <h2 class="subtitle"> Suggested intake is 75 ounces of water for 150 lb person.</h2>
        <progress class="progress is-large" value="x" max="100"></progress>
        <div class="control">
            <label class="button">
                <input type="submit" name="water" @click="plus1()" value="1 ounce">
                </label>
            <label class="button">
                <input type="submit" name="water" @click="plus5()" value="5 ounces">
                </label>
            <label class="button">
                <input type="submit" name="water" @click="plus10()" value="10 ounces">
                </label>
            <label class="button">
                <input type="submit" name="water" @click="plus20()" value= "20 ounces">
                </label>
        </div>

    </section>    
</template>

<script>
export default {
    data: () => ({
        x: 0
    }),
    methods: {
        plus1(){
            this.x += 1;
        },
        plus5(){
            this.x +=5;
        },
        plus10(){
            this.x+= 10;
        },
        plus20(){
            this.x+=20
        }
    }
}
</script>