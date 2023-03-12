<template>
    <div class="d-flex component" v-bind="inputMod">
        <label class="m-2 " for="pages-number">Número de pàgines</label>
        <button class="orange-white me-2" @click="changeCounter(-1)" type="button" name="button"> - </button>
        {{ counter }}
        <button class="orange-white ms-2" @click="changeCounter(1)" type="button" name="button"> + </button>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    const inputMod = defineProps({ 
            counter_initial: String,
            id: String,
            name: String 
        })
    var counter = ref(Number(inputMod.counter_initial))
    const emit = defineEmits(['totalPricePanell-emitted'])
    
    const changeCounter = (num) => {
        counter.value + num > 1 ? counter.value += num : counter.value = 1
        emit('totalPricePanell-emitted', inputMod.id, counter.value)
    }

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
        margin-top: 10px;
        margin-bottom: 10px
    }
</style>