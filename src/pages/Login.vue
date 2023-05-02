<script setup>
import FormLogin from "../components/FormLogin.vue";
import Slides from "../components/Slides.vue";
</script>

<template>
    <div class="row bg-gradiant-sm-login">
        <div class="col-12 col-md-6">
            <FormLogin />
        </div>
        <div class="col-12 col-md-6 d-none d-md-flex align-self-stretch bg-purple">
            <Slides />
        </div>
    </div>
</template>
