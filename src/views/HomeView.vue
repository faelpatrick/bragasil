<script setup>
import AppSugerido from './appSugereido/AppSugerido.vue';
import Influenciadores from './socialNetwork/SocialInfluenciadores.vue';
import { useAuth } from '@/composables/useAuth';

const { user } = useAuth();

</script>

<template>
  <main>
    <div class="d-flex justify-center align-center flex-column my-10">
      <div v-if="user">
        <p>Bem Vindo {{ user?.displayName.split(" ")[0] }} estamos trabalhando para lhe entregar recursos personalisados
        </p>
      </div>
      <p class="text-center">Comunidade Brasileira em Braga!</p>
    </div>
    <AppSugerido />
    <Influenciadores />
  </main>
</template>

<style>
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