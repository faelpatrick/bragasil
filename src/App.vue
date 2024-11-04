<script setup>
import { provide } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth';
// import { useRouter } from 'vue-router';
// import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import UserMenu from './views/menu/UserMenu.vue';
import AppSugerido from './views/appSugereido/AppSugerido.vue';
import Influenciadores from './views/socialNetwork/SocialInfluenciadores.vue';
const router = useRouter();
const { user } = useAuth();

const navigateTo = (path) => {
  router.push(path);
};

provide('navigateTo', navigateTo);

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
    <div class="d-flex justify-center align-center flex-column my-10">
      <div v-if="user">
        <p>Bem Vindo {{ user?.displayName.split(" ")[0] }} estamos trabalhando para lhe entregar recursos personalisados
        </p>
      </div>
      <p class="text-center">Comunidade Brasileira em Braga!</p>
    </div>
    <AppSugerido />
    <Influenciadores />
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

footer {
  position: relative;
  width: 100vw;
  height: 100px;
  color: white;
  padding: 14px 4px;
}

footer .copyright {
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding-bottom: 4px;
}

#header-banner {
  cursor: pointer;
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

header h1 {
  font-size: 3rem;
  margin: 0 0 16px 8px;
}

@media (max-width: 1024px) {
  #app {
    width: 100vw;
    min-height: 100vh;
  }

  .logo {
    width: 90px;
    height: 90px;
  }

  header {
    line-height: 1.2;
  }

  header h1 {
    font-size: 2rem;
  }

}
</style>
