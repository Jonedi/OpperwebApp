<script setup>
import MainLayout from './layouts/MainLayout.vue';
import { useUserStore } from "./stores/user";

const userStore = useUserStore();

// console.log(userStore.userData);
</script>

<template>
  <div class="container-fluid container-full">
    <!-- Header -->
    <div class="position-absolute">
      <div class="row pt-3 container-pf ms-5">
        <div class="col-6 col-sm-3 head d-flex justify-content-around d-none d-md-flex" :class="userStore.userData ? '' : 'bg-black'">
          <img src="/imgs/logo.png" class="img-fluid logo_w me-3" alt="logo">
          <h2 class="title"><span class="text-white">anime</span>yabu.</h2>
        </div>
      </div>
      <div class="icon_back pt-3 ps-4">
        <router-link to="/"><img src="/imgs/back.png" alt="back"></router-link>
      </div>
    </div>
    <!-- content -->
    <div class="row min-h">
      <div class="col-12 col-sm-3 bg-purple pt-4" :class="userStore.userData ? 'd-none d-sm-block col-12' : 'd-none'">
        <MainLayout />
      </div>
      <div :class="userStore.userData ? 'col-12 col-sm-9 ' : 'col-12'" class="bg-black">
        <router-view />
      </div>
    </div>
    <div class="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/main.scss';
.logo_w { width: 46px; }

.position-absolute {
    z-index: 9;
    width: 100%;
    @include media-breakpoint-up(sm) { width: 50%; }
}
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