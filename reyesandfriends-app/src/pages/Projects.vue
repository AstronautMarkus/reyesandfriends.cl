<template>
    <div class="projects-list container">
        <h1 class="title is-1 mt-4 mb-2 has-text-centered">Nuestros proyectos</h1>
        <p class="subtitle is-5 has-text-centered">En este apartado presentamos algunos de los proyectos que nos encontramos trabajando:</p>
        <div>
            <p class="title is-3 mt-4 has-text-centered">Proyectos en desarrollo</p>
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

        <div>
            <h1 class="title is-4 mt-4 mb-2 has-text-centered">Nuestros productos dedicados</h1>
            <p class="subtitle is-5 has-text-centered mb-5">
                En Reyes&Friends a parte de ofrecer software personalizado tenemos
                productos dedicados a tu empresa/negocio que te ayudarán a mejorar
                la gestión de tu empresa, automatizar procesos o tareas y a mejorar la productividad.
            </p>

            <div class="mt-6 mb-6 has-text-centered">
                <p class="is-italic">
                    ¡Muy pronto podrás explorar estos proyectos en acción, diseñados especialmente para ti!
                </p>
            </div>

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