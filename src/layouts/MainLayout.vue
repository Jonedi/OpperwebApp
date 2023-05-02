<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore();
</script>

<template>
  <div class="pt-3 ps-3 pb-5">
    <div class="menu mt-5 pt-5 ms-0 ms-md-4">
      <h4 class="text-white ">Categorías</h4>
      <ul class="nav flex-column">
        <li class="nav-item d-flex align-items-center">
          <router-link to="/categories/all" class="text-white text-decoration-none">Ver todos</router-link>
        </li>
        <li class="nav-item d-flex align-items-center">
          <router-link to="/categories/new" class="text-white text-decoration-none">Crear</router-link>
        </li>
      </ul>
      <h4 class="text-white mt-3">
        <button class="btn btn-link text-white text-decoration-none" @click="userStore.logoutUser()">Cerrar sesión</button>
      </h4>
    </div>
  </div>
</template>

