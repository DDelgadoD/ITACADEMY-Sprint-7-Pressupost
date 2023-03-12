<template>
  <div class="mb-2">
    ¿Qué vols fer?
  </div>
  <div class="mb-2">
    <input type="checkbox" id="checkbox0" @click="totalPrice(0, 1, 1)"/>
    <label  for="checkbox">Obtenir el pressupost d'una pàgina web  ({{ price[0] }}€)</label>
    <div v-if="pane" class="mt-2">
      <Panell :basePrice="0" @totalPrice-emitted="(b,l,p,fp) => totalPrice(b,l,p,fp)"/>
    </div>
  </div>
  <div class="mb-2">
    <input type="checkbox" id="checkbox1" @click="totalPrice(1)" />
    <label for="checkbox">Fer una campanya SEO  ({{ price[1] }}€)</label>
  </div>
  <div class="mb-2">
    <input type="checkbox" id="checkbox2" @click="totalPrice(2)" />
    <label for="checkbox">Fer una campanya de publicitat ({{ price[2] }}€)</label>
  </div>
  <div>
    Preu: {{ total }}
  </div>
  <div class="col-8 col-md-6 mx-auto mt-4 text-center">
         <button @click="toMain()" class="btn btn-primary ">Tornar</button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Panell from "./Panell.vue";
  import { costCalculator } from '../services/pageCost.js';
  import { useRouter } from 'vue-router';
    const router = useRouter()

  const check = ref([false, false, false])
  const price = ref([500, 300, 200])
  const total = ref(0)
  const pane = ref(false)
  const lastPaneValue = ref(0)

  const totalPrice = (i, lang=0, pages=0, frompane=false) => {
    if(!frompane) check.value[i] = !check.value[i]

    if( i == 0 && !frompane) pane.value = !pane.value
    
    if(i == 0){
      var actualValue
      check.value[i]
        ? actualValue = costCalculator(price.value[i], lang, pages)
        : actualValue = 0
      total.value = total.value - lastPaneValue.value + actualValue
      lastPaneValue.value = actualValue
    }else{
      check.value[i] 
        ? total.value += costCalculator(price.value[i], lang, pages) 
        : total.value -= costCalculator(price.value[i], lang, pages)
    }
  }

  const toMain = () => router.push({ path: '/' })

</script>

<style scoped>
</style>
