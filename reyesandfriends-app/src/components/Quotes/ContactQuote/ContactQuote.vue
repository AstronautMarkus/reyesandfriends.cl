<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Formulario de Contacto</h1>
            <form @submit.prevent="handleSubmit">
                <div class="field">
                    <label class="label" for="name">Nombre y Apellido</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            id="name"
                            v-model="form.name"
                            placeholder="Ingresa tu nombre y apellido"
                            required
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="email">Correo Electrónico</label>
                    <div class="control">
                        <input
                            class="input"
                            type="email"
                            id="email"
                            v-model="form.email"
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="subject">Asunto</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            id="subject"
                            v-model="form.subject"
                            placeholder="Ingresa el asunto"
                            required
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="message">Mensaje</label>
                    <div class="control">
                        <textarea
                            class="textarea"
                            id="message"
                            v-model="form.message"
                            placeholder="Escribe tu mensaje"
                            required
                        ></textarea>
                    </div>
                </div>

                <div class="field mt-4">
                    <div class="control">
                        <button class="button is-primary" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log('Formulario enviado:', this.form);
            alert('¡Gracias por contactarnos! Pronto responderemos a tu mensaje.');
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: '',
            };
        },
    },
};
</script>

<style scoped>
.section {
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>