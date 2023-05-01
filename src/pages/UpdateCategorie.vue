<script setup>
import UpdateCat from '../components/categories/UpdateCat.vue';
import { useRoute } from "vue-router";

const route = useRoute();
const updateCat = route.params.id;

</script>

<template>
    <div>
        <UpdateCat :updateCat="updateCat" />
    </div>
</template>