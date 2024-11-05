<template>
  <v-container class="pa-0">
    <h2 class="ml-6">Canais recomendados no YouTube</h2>
    <!-- Slide Group de aplicativos recomendados -->
    <v-slide-group v-model="activeSlide" class="slide-group-container bg-white rounded-xl" :show-arrows="!isMobile">
      <v-slide-item v-for="(social, index) in socials" :key="index" class="slide-item" elevation="5">
        <v-sheet color="green darken-4" class="social-card d-flex flex-column align-center justify-center rounded-xl"
          elevation="5">
          <v-avatar size="70" class="mb-4" color="white">
            <v-img :src="social.icon" alt="Ícone do social" />
          </v-avatar>
          <h3 class="social-title text-h6 text-white">{{ social.name }}</h3>
          <p class="social-description text-white text-center">{{ social.description }}</p>
          <div class="d-flex ">
            <v-btn v-for="media in social.midiasSociais" :key="`mk0-${media.name}`" class="ma-2"
              :color="media.color ? media.color : 'white'" :href="media.link" target="_blank" :icon="media.icon" />
          </div>

        </v-sheet>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script setup>
import { ref, inject } from 'vue';

const isMobile = inject('isMobile');
const activeSlide = ref(0); // Slide atual

// Lista de socials recomendados
const socials = ref([
  {
    name: 'Tio Maicon / Portugal Diários',
    category: 'Dicas',
    icon: 'https://yt3.googleusercontent.com/ytc/AIdro_kIici6P04CIVb0cm5EQzF2jgpAbDk1NI16R_gqSbq7BS3v=s160-c-k-c0x00ffffff-no-rj',
    description: 'Canal de dicas de Braga',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/c/PortugalDi%C3%A1rios/',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/tiomaykon/',
        icon: 'mdi-instagram',
        color: 'purple'
      },
    ]
  },
  {
    name: 'Casal Buscapé',
    category: 'Dicas',
    icon: 'https://yt3.googleusercontent.com/L_3RU6S10Qhd7-MSAvxy1jUfrmKGaTIbGxvgGd0qO35sSG2JR-32dwRyjeQGjPUB0uOT7h1X=s160-c-k-c0x00ffffff-no-rj',
    description: 'Canal de dicas de Portugal',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/c/CasalBuscap%C3%A9/',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/casalbuscape/',
        icon: 'mdi-instagram',
        color: 'purple'
      },
    ]
  }
]);
</script>

<style scoped>
.slide-group-container {
  display: flex;
  overflow-x: auto;
  border-radius: 8px;
  justify-content: center;
}

.slide-item {
  min-width: 300px;
  padding: 16px;
  box-sizing: border-box;
}

.social-card {
  width: 100%;
  padding: 16px;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .slide-item {
    padding: 10px;
    box-sizing: border-box;
  }

}
</style>
