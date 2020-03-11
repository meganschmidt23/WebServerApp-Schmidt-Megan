<template>
    <section>
        <h1 class="title">Daily Water Intake</h1>
        <h2 class="subtitle"> Suggested intake is 75 ounces of water for 150 lb person.</h2>
        <progress class="progress is-large" value="x" max="100">x%</progress>
        <div class="control">
            <label class="radio">
                <input type="radio" name="water">
                    1 ounce
                </label>
            <label class="radio">
                <input type="radio" name="water">
                    5 ounces
                </label>
            <label class="radio">
                <input type="radio" name="water">
                    10 ounces
                </label>
            <label class="radio">
                <input type="radio" name="water">
                    20 ounces
                </label>
        </div>
        <input class="button" type="submit" value="Submit input">

    </section>    
</template>

<script>
export default {
    
}
</script>