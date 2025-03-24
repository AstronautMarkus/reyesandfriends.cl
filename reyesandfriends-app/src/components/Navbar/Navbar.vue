<template>
  <nav class="navbar has-background-black navbar-with-border" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/">
          <img src="/reyesandfriends.svg" alt="ReyesAndFriends" style="width: 200px; display: block;">
        </router-link>
        <a role="button" class="navbar-burger" :class="{ 'is-active': isMenuActive }" aria-label="menu" aria-expanded="false" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <router-link class="custom-navbar-item" to="/services">Servicios</router-link>
          <router-link class="custom-navbar-item" to="/projects">Proyectos</router-link>
          <router-link class="custom-navbar-item" to="/contact">Contacto</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="custom-navbar-item" to="/about">Acerca de</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>

.navbar-burger {
  color: white;
}


.navbar-menu {
  transition: max-height 0.3s ease-in-out;
}


@media screen and (max-width: 1024px) {
  .navbar-menu {
    background-color: #222222;
    padding: 1rem;
    border-radius: 5px;
  }

  .custom-navbar-item {
    color: white !important;
    display: block;
    padding: 0.5rem;
    text-align: center;
  }
}

.custom-navbar-item {
  color: #ffffff !important;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  padding: 1rem;
}

.custom-navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff !important;
}

</style>
