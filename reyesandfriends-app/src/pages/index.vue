<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-half">

          <transition name="fade-slide" appear>
            <h1 class="title is-1 has-text-white">
              Impulsamos tu crecimiento digital
            </h1>
          </transition>
          

          <transition name="fade-slide" appear>
            <h2 class="subtitle is-5 mt-2 has-text-white">
              Desarrollamos software y soluciones tecnológicas a medida para empresas y emprendedores. 
              Desde sitios web hasta plataformas avanzadas, hacemos realidad tus ideas.
            </h2>
          </transition>
        </div>

        <div class="column is-half">

          <transition name="fade-zoom" appear>
            <figure class="image">
              <img src="/img/laptop.png" alt="Foto de ejemplo">
            </figure>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.fade-slide-enter-active {
  transition: opacity 1s, transform 1s ease-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}


.fade-zoom-enter-active {
  transition: opacity 1s, transform 1s ease-out;
}
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
</style>
