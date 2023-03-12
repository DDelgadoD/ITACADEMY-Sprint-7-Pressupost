<template>
    <div class="card rounded border-dark col-7 col-sm-6 col-md-5 col-lg-4 ms-4 border-4 p-3">
        
    <InputMod id="pages" name="pages-number" counter_initial="1" @totalPricePanell-emitted = "(id, counter) => totalPricePanell(id, counter)" />
    <InputMod id="languages" name="languages-number" counter_initial="1" @totalPricePanell-emitted = "(id, counter) => totalPricePanell(id, counter)" />

    </div>
</template>

<script setup>
    import InputMod from "./InputMod.vue";
    import { ref } from "vue";

    const props = defineProps({
        basePrice: Number
    })

    var pages = ref(1)
    var languages = ref(1)

    const emit = defineEmits(['totalPrice-emitted'])
    
    const totalPricePanell = (id, value)  =>{
        if (id == "pages") pages.value = value
        if (id == "languages") languages.value = value
        emit('totalPrice-emitted', props.basePrice, pages.value, languages.value, true)
    }


</script>

<style scoped>

</style>