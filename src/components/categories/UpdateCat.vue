<script setup>
import { ref, defineProps } from "vue";
const category = ref()
const props = defineProps(['updateCat'])
category.value = props.updateCat

const saveCat = () => {
    
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated').setTimeout(3000)
    }, false)
  })
};
</script>

<template>
    <div class="min__height">
        <div class="row justify-content-center pt-5 pb-3">
            <div class="col-11 col-sm-10 pt-5">
                <h1 class="fw-bold">Actualizar Categoría</h1>
            </div>
        </div>
        <div class="row justify-content-center py-5">
            <div class="col-11 col-sm-10 pb-5">
                <div class="row">
                    <div class="col-11 col-sm-6 mb-5">
                        <form @submit.prevent="saveCat" class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="validationCustom01" class="form-label">Nombre de categoría</label>
                                <input type="text" class="form-control bg-input text-white py-3" v-model.trim="category" id="validationCustom01" aria-describedby="emailHelp" required>
                                <div id="valid-feedback" class="form-text text-end d-none">El campo no puede estar vacio</div>
                            </div>
                            <button type="submit" class="btn btn-pink w-100 fw-bold py-3 mt-5">Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>