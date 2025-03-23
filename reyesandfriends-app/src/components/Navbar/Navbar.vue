<template>
    <nav class="navbar has-background-dark py-2 navbar-with-border" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/">
            <img src="/reyesandfriends.svg" alt="ReyesAndFriends" style="width: 150px; display: block;">
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
            <a class="navbar-item custom-navbar-item" href="#">Proyectos</a>            
            <a class="navbar-item custom-navbar-item" href="#">Servicios</a>
            <a class="navbar-item custom-navbar-item" href="#">Contacto</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item custom-navbar-item" href="#">Acerca de</a>
            <a class="navbar-item custom-navbar-item" href="#">Blog</a>
            <a class="navbar-item custom-navbar-item" href="#">Soporte</a>
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
  }

  .custom-navbar-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

  .custom-navbar-item {
  color: #ffffff !important;
  transition: background-color 0.3s ease-in-out;
}

.custom-navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff !important;
}

.navbar-with-border {
  border-bottom: 4px solid rgb(182, 0, 0);
}

  </style>