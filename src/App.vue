<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/HomeView.vue'
import Login from './views/login/LoginFirebase.vue';
</script>

<template>
  <div class="app">
  <header>
    <img alt="Bragasil logo" class="logo" src="@/assets/bragasil.png" width="150" height="150" />
    <h1 class="mt-10">Bem vindos a <span class="green">BRA</span><span class="red">GASIL!</span></h1>
    <div class="wrapper">
        <nav class=" pa-10">
          <!--   <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
          <RouterLink to="/login">Login</RouterLink>
        </nav>
      </div>
  </header>
    <div class="d-flex justify-center align-center flex-column my-10">
      <br>
      <br>
      <p class="text-center">Comunidade Brasileira em Braga!</p>

    
    </div>
    <RouterView />
    <footer>
      <p class="text-center copyright">©2024 Bragasil - desenvolvido por <a href="https://rafaelpatrick.com.br" target="_blank">Rafael Patrick</a> </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Inter', sans-serif;
  color: var(--color-text);
  background-color: black;
  min-height: 100vh;
  color: green;
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
footer
.green {
  color: #1b8a41;
}

.red {
  color: #ef262d;
}

#app .reflexo {
  transform: scaleY(-1);
  opacity: 0.3;
  margin-top: -2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  #app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    padding: 2px;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
