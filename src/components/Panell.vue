<template>
    <div class="card rounded border-dark border-4 col-sm-4 p-3">
        <div>
            <label class="m-2 " for="pages-number">Número de pàgines</label>
            <input 
                type="number" id="pages-number" name="pages-number" min="1"
                @input="$emit('totalPrice-emited', basePrice, pages, languages, true)" v-model="pages"
            />
        </div>

        <div>
            <label class="m-2" for="pages-languges">Número d'idiomes</label>
            <input 
                type="number" id="pages-languages" name="pages-languages" min="1"
                @input="$emit('totalPrice-emited', basePrice, pages, languages, true)" v-model="languages"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref, defineEmits } from "vue";
    
    const props = defineProps({
        basePrice: Number
    })

    const emit = defineEmits(['totalPrice-emited'])

    const pages = ref(1)
    const languages = ref(1)

</script>

<style scoped>

</style>