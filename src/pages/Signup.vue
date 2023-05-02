<script setup>
import FormSignup from "../components/FormSignup.vue";
import Slides from "../components/Slides.vue";
</script>

<template>
    <div>
        <div class="row bg-gradiant-sm-login">
            <div class="col-12 col-md-6">
                <FormSignup/>
            </div>
            <div class="col-12 col-md-6 d-none d-md-flex align-self-stretch bg-purple">
                <Slides />
            </div>
        </div>
    </div>
</template>