<template>
  <div class="pa-0">
    <h2 class="ml-6">Canais recomendados no YouTube</h2>
    <!-- Slide Group de aplicativos recomendados -->
    <v-slide-group
      v-model="activeSlide"
      class="slide-group-container bg-white rounded-xl"
      show-arrows
    >
      <v-slide-item
        v-for="(yt, index) in yts"
        :key="index"
        class="slide-item"
        elevation="5"
      >
        <v-sheet
          color="green darken-4"
          class="yt-card d-flex flex-column align-center justify-center rounded-xl"
          elevation="5"
          
        >
          <v-avatar size="70" class="mb-4" color="white">
            <v-img :src="yt.icon" alt="Ícone do yt" />
          </v-avatar>
          <h3 class="yt-title text-h6 text-white">{{ yt.name }}</h3>
          <div class="d-flex ">
            <v-btn
            class="ma-2"
            color="blue"
            :href="yt.playStoreLink"
            target="_blank"
            icon="mdi-google-play"
            />
            <v-btn
            class="ma-2"
            color="white"
            :href="yt.ytStoreLink"
            target="_blank"
            icon="mdi-ytle"
            />
          </div>

          <p class="yt-description text-white text-center">{{ yt.description }}</p>
        </v-sheet>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeSlide = ref(0); // Slide atual

// Lista de yts recomendados
const yts = ref([
  {
    name: 'Tio Maicon',
    category: 'Dicas',
    icon: 'https://play-lh.googleusercontent.com/iSreCpNE1K9TS5sBX07r6JRtFUVrMrpjbVNlnKavmYJu2cXcKbkoMsc_1uay4yoEQ3M=w240-h480-rw',
  },
  {
    name: 'Pingo Doce',
    category: 'Supermercado',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ba/6e/f0/ba6ef043-6158-e5ee-07a4-a3d32787a40e/AppIcon-0-1x_U007ephone-0-1-85-220-0.png/246x0w.webp',
  },
  {
    name: 'Uber / Uber Eats',
    category: 'Transporte / Delivery',
    icon: 'https://play-lh.googleusercontent.com/n109V9dur2NFwV7Fbr8lwlU-isXRR0K7Q-pvp1LCyRwTVP2DfJaR-dklmXzK0MhQuz9E=w240-h480-rw',
  },
  {
    name: 'Glovo',
    category: 'Delivery',
    icon: 'https://play-lh.googleusercontent.com/iTpx7rDQGJQd4dHVwhsKmSpQv72zyJ6M4df8smHO7rGCOJUKeKZtynrft0NWlnf47w=w240-h480-rw',
  },
  // Adicione mais apps conforme necessário
]);
</script>

<style scoped>

:root {
  --color-google: linear-gradient(to right, #4285f4, #34a853, #fbbc05, #ea4335);
}

.slide-group-container {
  display: flex;
  overflow-x: auto;
  border-radius: 8px;
}

.slide-item {
  min-width: 200px;
  padding: 16px;
  box-sizing: border-box;
}

.app-card {
  width: 100%;
  padding: 16px;
  text-align: center;
}

.color-google {
  background-color: gradient(to right, #4285f4, #34a853, #fbbc05, #ea4335);
}

</style>
