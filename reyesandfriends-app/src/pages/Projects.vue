<template>
    <div class="projects-list container">
        <h1 class="title is-1 mt-4 has-text-centered">Our Projects</h1>
        <p class="subtitle is-5 has-text-centered">Here are some of the projects we are currently working on:</p>
        <div class="columns is-multiline">
            <div v-for="project in projects" :key="project.id" class="column is-one-third">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="project.image" :alt="project.name" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="title is-4">{{ project.name }}</p>
                        <p class="content">{{ project.description }}</p>
                    </div>
                </div>
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

<style scoped>
/* No additional styles needed as Bulma is being used */
</style>