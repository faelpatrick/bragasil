<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UserMenu from './views/menu/UserMenu.vue';
// import { useRouter } from 'vue-router';
// import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
</script>

<template>
  <div class="app">
    <header>
      <div class="d-flex justify-center align-center flex-row my-1 w-100">
        <img alt="Bragasil logo" class="logo" src="@/assets/bragasil.png" width="150" height="150" />
        <h1 class="mt-6">Bem vindos a <span class="green">BRA</span><span class="red">GASIL!</span></h1>
        <UserMenu />
        <div class="wrapper">
        </div>
      </div>
    </header>
    <div class="d-flex justify-center align-center flex-column my-10">
      <p class="text-center">Comunidade Brasileira em Braga!</p>
    </div>
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

footer .copyright {
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 0;
}

footer .copyright {
  text-align: center;
  font-size: 0.8rem;
}

.copyright a {
  color: green;
  text-decoration: none;
}

footer .green {
  color: #1b8a41;
}

.red {
  color: #ef262d;
}

.green {
  color: #1b8a41;
}

header {
  line-height: 1.5;
  max-width: 100vw;
}

@media (min-width: 1024px) {
  #app {
    width: 100vw;
    min-height: 100vh;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

}
</style>
