<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const name = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const identity = ref('')
const password = ref('')
const repassword = ref('')
const type = ref('Natural')

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
    userStore.signupUserNat(name.value, lastname.value, phone.value, identity.value, email.value, password.value, type.value)
};
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control bg-input text-white" v-model.trim="name" id="name" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Texto inválido y el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Apellido</label>
                <input type="text" class="form-control bg-input text-white" v-model.trim="lastname" id="lastname" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Texto inválido y el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="phoneNat" class="form-label">Teléfono</label>
                <input type="number" class="form-control bg-input text-white" v-model.trim="phone" id="phoneNat" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Número de teléfono inválido y el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="identityNat" class="form-label">Número de identificación</label>
                <input type="number" class="form-control bg-input text-white" v-model.trim="identity" id="identityNat" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Número inválido y el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="emailNat" class="form-label">Email</label>
                <input type="email" class="form-control bg-input text-white" v-model.trim="email" id="emailNat" aria-describedby="emailHelp" required>
                <div class="invalid-feedback form-text text-end">Email inválido y el campo es requerido</div>
            </div>
            <div class="mb-3">
                <label for="passwordNat" class="form-label">Password</label>
                <input type="password" v-model.trim="password" class="form-control bg-input text-white" id="passwordNat" required>
                <div class="invalid-feedback form-text text-end">¿no coinciden las contraseñas?</div>
            </div>
            <div class="mb-3">
                <label for="repasswordNat" class="form-label">Confirmar contraseña</label>
                <input type="password" v-model.trim="repassword" class="form-control bg-input text-white" id="repasswordNat" required>
                <div class="invalid-feedback form-text text-end">¿no coinciden las contraseñas?</div>
            </div>
            <button type="submit" class="btn btn-pink w-100 fw-bold">Registrar</button>
        </form>
    </div>
</template>