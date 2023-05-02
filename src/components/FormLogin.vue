<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const email = ref('')
const password = ref('')

onMounted(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

const handleSubmit = (e) => {
    e.preventDefault()
    userStore.loginUser(email.value, password.value)
};

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
                <img src="/imgs/faces-login.png" alt="Faces login" class="img-fluid mx-auto">
                <h3 class="h1 text-center mt-2 fw-bold">ひさしぶり!</h3>
                <p class="text-center fst-italic">¡Hola, te extrañamos!</p>
                <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="validationCustom01" class="form-label">Email</label>
                        <input type="email" class="form-control bg-input text-white" v-model.trim="email" id="validationCustom01" aria-describedby="emailHelp" required>
                        <div class="invalid-feedback form-text text-end">Formato Email inválido</div>
                    </div>
                    <div class="mb-3">
                        <label for="validationCustom02" class="form-label">Password</label>
                        <input type="password" v-model.trim="password" class="form-control bg-input text-white" id="validationCustom02" required>
                        <!-- <div class="invalid-feedback form-text text-end">Olvidó la contraseña?</div> -->
                    </div>
                    <button type="submit" class="btn btn-pink w-100 fw-bold">Acceder</button>
                </form>
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
                        <p class="text-center">¿Quieres registrarte? <router-link to="/signup" class="text-pink text-decoration-none">Registrate</router-link></p>
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