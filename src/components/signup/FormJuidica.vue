<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const rSocial = ref('')
const nit = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')
const type = ref('juridica')

onMounted(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  
    if (password.value === repassword.value) {
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            
    
          form.classList.add('was-validated')
        }, false)
      })
    }
})();

const handleSubmit = (e) => {
    e.preventDefault()
    userStore.signupUserJur(rSocial.value, nit.value, phone.value, email.value, password.value, type.value)
};
</script>

<template>
    <div>
        <form @submit="handleSubmit" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="rSocial" class="form-label">Razón social</label>
                <input type="text" class="form-control bg-input text-white" v-model.trim="rSocial" id="rSocial" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Texto inválido o el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="nit" class="form-label">NIT</label>
                <input type="text" class="form-control bg-input text-white" v-model.trim="nit" id="nit" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Texto inválido o el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="phoneJur" class="form-label">Teléfono</label>
                <input type="text" class="form-control bg-input text-white" v-model.trim="phone" id="phoneJur" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Texto inválido o el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="emailJur" class="form-label">Email</label>
                <input type="email" class="form-control bg-input text-white" v-model.trim="email" id="emailJur" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Email inválido o el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="passwordJur" class="form-label">Password</label>
                <input type="password" v-model.trim="password" class="form-control bg-input text-white" id="passwordJur" required>
                <div class="invalid-feedback form-text text-end">¿no coinciden las contraseñas?</div>
            </div>
            <div class="mb-3">
                <label for="repasswordJur" class="form-label">Confirmar contraseña</label>
                <input type="password" v-model.trim="repassword" class="form-control bg-input text-white" id="repasswordJur" required>
                <div class="invalid-feedback form-text text-end">¿no coinciden las contraseñas?</div>
            </div>
            <div class="mb-3">
                <input type="checkbox" v-model.trim="type" value="juridica" class="form-control bg-input text-white d-none" checked>
            </div>
            <button type="submit" class="btn btn-pink w-100 fw-bold">Registrar</button>
        </form>
    </div>
</template>