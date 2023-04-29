<script setup>
import MainLayout from './layouts/MainLayout.vue';
</script>

<template>
  <div class="row min-h">
    <div class="col-5 bg-purple">
      <MainLayout />
    </div>
    <div class="col-7">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.min-h { min-height: 40em; }
</style>

<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/imgs/logo.png" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <router-view />
</template> -->
