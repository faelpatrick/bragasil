<script setup>
import { provide } from 'vue';
import { RouterView, useRouter } from 'vue-router'
// import { useRouter } from 'vue-router';
// import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import UserMenu from './views/menu/UserMenu.vue';

const router = useRouter();

const isMobile = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

const navigateTo = (path) => {
  router.push(path);
};

provide('navigateTo', navigateTo);
provide('isMobile', isMobile);

</script>

<template>
  <div class="app">
    <header>
      <div class="d-flex justify-center align-center flex-row my-1 w-100">
        <div id="header-banner" class="d-flex justify-center align-center flex-row my-1" @click="navigateTo('/')">
          <img alt="Bragasil logo" class="logo" src="@/assets/bragasil.png" width="150" height="150" />
          <h1 class="mt-6">
            Bem vindos a <span class="green">BRA</span><span class="red">GASIL!</span></h1>
        </div>
        <UserMenu />
        <div class="wrapper">
        </div>
      </div>
    </header>
    <RouterView class="pa-2" />
    <footer>
      <p class="text-center copyright">
        ©2024 Bragasil - desenvolvido por
        <a href="http://rafaelpatrick.com.br" target="_blank">Rafael Patrick</a>
      </p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: black;
}

#app {
  font-family: 'Inter', sans-serif;
  max-width: 100vw;
}

.v-slide-group__container .v-slide-group__content{
  justify-content: center;
}


</style>
