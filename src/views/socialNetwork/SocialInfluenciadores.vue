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
          <!-- <p class="social-description text-white text-center">{{ social.description }}</p> -->
          <div class="d-flex ">
            <v-btn v-for="media in social.midiasSociais" :key="`mk0-${media.name}`" class="ma-2"
              :color="media.color ? media.color : 'white'" :href="media.link" target="_blank"  icon>
              <v-icon :icon="media.icon" />
            </v-btn>
            
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
    name: 'Casal Buscapé',
    category: 'Dicas',
    icon: './imagens/social/casalbuscape.jpg',
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
  },
  {
    name: 'Gustavo Luna 🇵🇹 ',
    category: 'Vlog',
    icon: '/imagens/social/gustavoluna.jpg',
    description: 'Vlog Imigração',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@GustavoLunaPT',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/gustavolunapt',
        icon: 'mdi-instagram',
        color: 'purple'
      },
    ]
  },
  {
    name: 'Mayan Xavier',
    category: 'Vlog',
    icon: './imagens/social/mayan_xavierr.jpg',
    description: 'Vlog Imigrante Brasileiro em Portugal',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UCtHTOZFWjo3LuD2uNPxEkrQ',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/mayan_xavierr/',
        icon: 'mdi-instagram',
        color: 'purple'
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@mayan_portugal',
        icon: 'nav:tiktok',
        color: 'white'
      }
    ]
  },
  {
    name: 'Portugaiando',
    category: 'Dicas',
    icon: 'https://yt3.googleusercontent.com/m6u_n0NsXJDPBpllbcu-c5iBfJrC3cw8I-tHsIfqS1NAiTlJoRpZznqywDyHDrVaDXw3BinC9A=s160-c-k-c0x00ffffff-no-rj',
    description: 'Canal de dicas de Portugal',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/c/Portugaiando',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/portugaiando/',
        icon: 'mdi-instagram',
        color: 'purple'
      },
    ]
  },
  {
    name: 'Faelpatrick',
    category: 'Vlog',
    icon: '/imagens/social/faelpatrick.jpg',
    description: 'Canal de dicas de Informática',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/faelpatrick',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/faelpatricks',
        icon: 'mdi-instagram',
        color: 'purple'
      },
      {
        name: 'TikTok',
        link: 'https://www.tiktok.com/@faelpatrick',
        icon: 'nav:tiktok',
        color: 'white'
      }
    ]
  },
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
    name: 'Vagas pelo Mundo',
    category: 'Dicas',
    icon: 'https://yt3.googleusercontent.com/F54h4DlYWAws1uc4PvA0EFC_TwaXK_3cKGIr4KK-FpZnnXthOoxOIsBVAS_E_iaFD0kIreAsmA=s160-c-k-c0x00ffffff-no-rj',
    description: 'Canal de vagas de emprego em Portugal e no mundo',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@VagaspeloMundo',
        icon: 'mdi-youtube',
        color: 'red'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/vagaspelomundo/',
        icon: 'mdi-instagram',
        color: 'purple'
      },
    ]
  },
  {
    name: 'Casal em Braga',
    category: 'Vlog',
    icon: '/imagens/social/casalembraga.jpg',
    description: 'Vlog de um casal em Braga',
    midiasSociais: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/@casalembraga.',
        icon: 'mdi-youtube',
        color: 'red'
      },
    ]
  },

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

.social-card .v-icon {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}

@media screen and (max-width: 1024px) {
  .slide-item {
    padding: 10px;
    box-sizing: border-box;
  }

}
</style>
