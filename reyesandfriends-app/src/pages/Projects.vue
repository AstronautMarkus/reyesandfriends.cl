<template>
    <div class="projects-list container">
        <h1 class="title is-1 mt-4 mb-2 has-text-centered">Nuestros proyectos</h1>
        <p class="subtitle is-5 has-text-centered">En este apartado presentamos algunos de los proyectos que nos encontramos trabajando:</p>
        <div>
            <section v-for="project in projects" :key="project.id" class="section">
                <div class="columns is-vcentered">
                    <div class="column is-half">
                        <figure class="image is-16by9">
                            <img :src="project.image" :alt="project.name" />
                        </figure>
                    </div>
                    <div class="column is-half">
                        <h2 class="title is-3">{{ project.name }}</h2>
                        <p class="content">{{ project.description }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useProjectsList } from '../composables/projects_list';

export default {
    setup() {
        const projects = ref(useProjectsList());
        return { projects };
    }
};
</script>

<style scoped>
/* No additional styles needed as Bulma is being used */
</style>