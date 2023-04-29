<script setup>
import { useRoute } from "vue-router";
import GetCat from '../components/categories/GetCat.vue'
import NewCat from '../components/categories/NewCat.vue'

const route = useRoute();

const ruta = route.params.item;
</script>

<template>
    <div>
        <GetCat v-if="ruta === 'all'"/>
        <NewCat  v-if="ruta === 'new'"/>
    </div>
</template>