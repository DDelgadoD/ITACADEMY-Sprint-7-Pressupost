<template>
    <div> 
      ¿Qué vols fer?
    </div>
    <div>
      <input type="checkbox" id="checkbox0" v-on:click = "totalPrice(0)" /> 
      <label for="checkbox">Una pàgina web ({{ price[0] }}€)</label>
    </div>
    <div>
      <input type="checkbox" id="checkbox1" v-on:click = "totalPrice(1)" />
      <label for="checkbox">Una pàgina web ({{ price[1] }}€)</label>
    </div>
    <div>
      <input type="checkbox" id="checkbox2" v-on:click = "totalPrice(2)" /> 
      <label for="checkbox">Una pàgina web ({{ price[2] }}€)</label>
    </div>
  
    <div>
      Preu: {{ total}}
    </div>
  </template>
  
  <script setup>
    import { ref } from "vue";
  
    const check = ref([false, false, false])
    const price = ref([500, 300, 200])
    const total = ref(0)
  
    const totalPrice = (i) => {
      check.value[i] = !check.value[i]
      check.value[i]  ? total.value += price.value[i] : total.value -= price.value[i] 
    }
  
  </script>
  
  <style scoped>
  </style>
  