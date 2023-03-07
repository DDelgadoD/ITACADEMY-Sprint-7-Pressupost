<template>
    <div class="d-flex component">
        <button class="orange-white me-2" @click="changeCounter(-1)" type="button" name="button"> - </button>
        {{ counter }}
        <button class="orange-white ms-2" @click="changeCounter(1)" type="button" name="button"> + </button>
    </div>
</template>
<script setup>
    import {ref} from "vue"
    var counter = ref(1)
    const changeCounter = (num) => counter.value + num > 1 ? counter.value += num : counter.value = 1
</script>
<style scoped>
    .orange-white{
        color: white;
        background-color: orange;
        padding: 0 2%;
        border:none ;
        font-size: x-large;
        font-weight: bolder;
        border-radius: 15%;
        width: 40px;
        aspect-ratio: 1;

    }
    .component{
        align-items: center;
    }
</style>