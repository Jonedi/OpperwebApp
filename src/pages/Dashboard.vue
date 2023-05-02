<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore();
</script>

<template>
    <div class="row justify-content-center pt-5">
        <div class="col-11 col-sm-10 py-5">
            <h1>Hola, <span class="fw-bold">{{ userStore.userData.name }}</span></h1>
        </div>
    </div>
    <div class="row justify-content-center pt-3 pb-5">
        <div class="col-11 col-sm-10 pb-5">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <p>Selecciona una opción:</p>
                <div class="d-flex flex-column">
                    <router-link to="/categories/all" class="btn btn-pink my-3 text-purple fw-bold py-3">Ver todas las categorías</router-link>
                    <router-link to="/categories/new" class="btn btn-pink my-3 text-purple fw-bold py-3">Crear categorías</router-link>
                    <button class="btn btn-pink my-3 text-purple fw-bold py-3" @click="userStore.logoutUser()">Cerrar sesión</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>