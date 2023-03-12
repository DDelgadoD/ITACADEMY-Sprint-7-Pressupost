<template>
    <div class="col-8 col-md-6 mx-auto mt-4 text-center">
        <img src="src/assets/image-1.png" />
        <img src="src/assets/image-2.png" />
    </div>
    <div class="col-8 col-md-6 mx-auto mt-4 text-center">
        <div>
            Aquesta és una pàgina de pressupostos per a pàgines web, és a dir, una pàgina web que té com a objectiu
            proporcionar informació sobre
            els costos associats a la creació d'un lloc web. Aquesta pàgina pot ser utilitzada per empreses o professionals
            que
            ofereixen serveis de disseny web i que volen informar els seus clients potencials sobre els costos dels seus
            serveis.
        </div>
        <div class="mt-2">
            Aquesta pàgina inclou informació sobre els tipus de serveis que s'ofereixen, els preus associats a
            cada servei, les característiques de cada plana. Això ajuda als clients potencials a comprendre millor els
            costos
            associats amb la creació d'un lloc web i a prendre una decisió informada sobre quin servei escollir.
        </div>
    </div>
    <div class="col-8 col-md-6 mx-auto mt-4 text-center">
        <button @click="toHome()" class="btn btn-primary ">Al generador de pressupostos</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const toHome = () => router.push({ path: '/home' })
</script>
<style scoped></style>