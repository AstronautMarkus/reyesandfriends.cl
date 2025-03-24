<script>

export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};

</script>

<template>
    <footer class="footer has-background-black has-text-white">
        <div class="content has-text-centered">
            <p class="subtitle has-text-white">Reyes&Friends.cl</p>
        </div>
        <div class="columns is-mobile is-multiline">
            <div class="column is-half has-text-centered-mobile">
                <h2 class="has-text-white">Contacto</h2>
                <p>Teléfono: +56 9 5036 9308</p>
                <p>Email: contacto@reyesandfriends.cl</p>
            </div>
            <div class="column is-half has-text-centered-mobile">
                <h2 class="has-text-white">Enlaces Rápidos</h2>
                <ul>
                    <li><router-link class="has-text-white" to="/">Inicio</router-link></li>
                    <li><router-link class="has-text-white" to="/services">Servicios</router-link></li>
                    <li><router-link class="has-text-white" to="/about">Nosotros</router-link></li>
                    <li><router-link class="has-text-white" to="/contact">Contacto</router-link></li>
                </ul>
            </div>
        </div>
        <div class="content has-text-centered">
            <p class="has-text-white">
                &copy; {{ currentYear }} Reyes&Friends. Todos los derechos reservados.
            </p>
            <p class="has-text-white is-size-7">
                Designed with <a class="has-text-link" href="https://bulma.io" target="_blank" rel="noopener">Bulma</a>.
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 2rem 1.5rem;
    position: relative;
    width: 100%;
}

.columns.is-mobile.is-multiline {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
}

.has-text-centered-mobile {
    text-align: center;
}

@media screen and (max-width: 768px) {
    .columns.is-mobile.is-multiline {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
</style>

