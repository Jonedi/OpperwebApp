<script setup>
import { ref } from "vue";
import Natural from '../components/signup/FormNatural.vue'
import Juridica from '../components/signup/FormJuidica.vue'

const select = ref()

// console.log(select);

const social = [
    {
        img: '/imgs/social/instagram-icon.png',
        url: '#'
    },
    {
        img: '/imgs/social/twitter-icon.png',
        url: '#'
    },
    {
        img: '/imgs/social/facebook-icon.png',
        url: '#'
    },
];
</script>

<template>
    <section class="my-5">
        <!-- formulario -->
        <div class="row justify-content-center pt-5">
            <div class="col-11 col-md-8 d-flex flex-column">
                <div class="d-flex justify-content-center align-items-center">
                    <img src="/imgs/face-signup.png" alt="Faces login" class="img-fluid">
                    <div class="d-block">
                        <h3 class="h1 text-center mt-2 fw-bold">ようこそ!</h3>
                        <p class="text-center fst-italic">¡Bienvenido!</p>
                    </div>
                </div>
                <div class="typePeople d-flex justify-content-center">
                    <p class="me-3">Tipo de Persona</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="natural" value="natural" v-model="select" checked>
                        <label class="form-check-label" for="natural">Natural</label>
                        </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="juridica" value="juridica" v-model="select">
                        <label class="form-check-label" for="juridica">Juríidica</label>
                    </div>
                </div>
                <Natural v-if="!select" />
                <Natural  v-else-if="select === 'natural'"/>
                <Juridica v-else-if="select === 'juridica'"/>
                <div class="social">
                    <div class="d-flex align-items-center justify-content-around mt-3">
                        <div class="line"></div>
                        <p class="mb-0">Regístrate también con</p>
                        <div class="line"></div>
                    </div>
                    <div class="d-flex justify-content-around mt-3">
                        <a :href="item.url" target="_blank" rel="noopener noreferrer" v-for="item in social" :key="item">
                            <img :src="item.img" alt="">
                        </a>
                    </div>
                    <div class="register mt-4">
                        <p class="text-center">Ya estás registrado? <router-link to="/login" class="text-pink text-decoration-none">Acceder</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

p { font-family: $roboto; }
.form-text {
    font-family: $poppins;
    color: $red
}
.was-validated {
    #valid-feedback { display: block !important; }
}

.line {
    border-top: 1px solid #fff;
    width: 50px;
}
</style>