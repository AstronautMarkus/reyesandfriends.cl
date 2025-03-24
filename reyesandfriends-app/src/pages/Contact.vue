<script setup>
import ContactQuote from '../components/Quotes/ContactQuote/ContactQuote.vue';
</script>

<template>
    <div class="columns is-vcentered is-centered mt-4 mb-5">
        <div class="column is-half has-text-centered">
            <h1 class="title">Contáctanos</h1>
            <p class="subtitle">Estaremos enctantados de escucharte si tienes una duda. ¡Esríbenos en cualquier momento!</p>
            <figure class="image is-128x128 is-inline-block mt-4">
                <img src="/icons/contact-details-svgrepo-com.svg" alt="Contact Illustration" />
            </figure>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-half">
            <ContactQuote />
        </div>
    </div>
</template>
