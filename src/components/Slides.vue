<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const components = {
    Carousel, Slide, Pagination, Navigation
}

const slides = [
    { img: '/imgs/slides/img_slide_1.png', name: 'yabu'},
    { img: '/imgs/slides/img_slide_2.png', name: 'Kyojuro'},
    { img: '/imgs/slides/img_slide_3.png', name: 'Inosuke'}
];
</script>

<template>
    <section class="w-100">
        <!-- Slides -->
        <Carousel :autoplay="2000" :wrap-around="true" class="slides mb-5">
            <Slide v-for="slide in slides" :key="slide">
                <div class="row">
                    <div class="col-12">
                        <img :src="slide.img" :alt="slide.name" class="img-fluid mx-5">
                        <h2 class="carousel__item display-2 text-center fw-bolder">anime <span class="text-fuxia">{{ slide.name }}.</span></h2>
                        <div class="row justify-content-center">
                            <div class="col-8 mt-4">
                                <p class="mb-0">Ver anime en línea en HD, subtitulado o doblado,  tu celular o computadora.</p>
                                <p class="mb-0">¡Animeyabu, tu portal de anime en línea!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <Pagination />
    
            </template>
        </Carousel>
    </section>
</template>

<style lang="scss" scoped>
    img { width: 80%; }
</style>