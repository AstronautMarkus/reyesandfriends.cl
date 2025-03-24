<script>
import { ref } from 'vue';
import { serviceList } from '../../composables/service_list';

export default {
    setup() {
        const services = ref(serviceList());
        return { services };
    }
};
</script>

<template>
    <div class="services-list">
        <section class="hero is-primary custom-hero-gradient">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-white">Nuestros servicios</h1>
                    <h2 class="subtitle title has-text-white">Explore la amplia gama de servicios que ofrecemos para satisfacer sus necesidades.</h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-one-third" v-for="service in services" :key="service.id">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img :src="service.image" :alt="service.title">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4">{{ service.title }}</p>
                                <p class="content">{{ service.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<style scoped>
.services-list {
    font-family: 'Arial', sans-serif;
}
.card {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
</style>