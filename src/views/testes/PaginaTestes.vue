<template>
  <div>
    <h1>Carregar Dados de Teste para appSugeridos</h1>
    <v-btn color="green" @click="loadTestData" :disabled="loading">Carregar Dados de Teste</v-btn>
    <p v-if="loading">Carregando dados...</p>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { createData } from '@/services/firebaseService';

export default {
  setup() {
    const loading = ref(false);
    const successMessage = ref('');

    // Dados de teste para a subcoleção `appSugeridos`
    const testData = [
      {
        name: 'App TUB',
        category: 'Transporte',
        icon: 'https://play-lh.googleusercontent.com/iSreCpNE1K9TS5sBX07r6JRtFUVrMrpjbVNlnKavmYJu2cXcKbkoMsc_1uay4yoEQ3M=w240-h480-rw',
        description: 'Descrição do App TUB',
        playStoreLink: 'https://play.google.com/store/apps/details?id=pt.tub.smartapp&hl=pt_PT',
        appStoreLink: 'https://apps.apple.com/pt/app/tub-app/id1280499795',
      },
      {
        name: 'Pingo Doce',
        category: 'Supermercado',
        icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ba/6e/f0/ba6ef043-6158-e5ee-07a4-a3d32787a40e/AppIcon-0-1x_U007ephone-0-1-85-220-0.png/246x0w.webp',
        description: 'Descrição do Pingo Doce',
        playStoreLink: 'https://play.google.com/store/apps/details?id=pt.pingodoce&hl=pt_PT',
        appStoreLink: 'https://apps.apple.com/pt/app/o-meu-pingo-doce/id1218939596',
      },
      {
        name: 'Uber / Uber Eats',
        category: 'Transporte / Delivery',
        icon: 'https://play-lh.googleusercontent.com/n109V9dur2NFwV7Fbr8lwlU-isXRR0K7Q-pvp1LCyRwTVP2DfJaR-dklmXzK0MhQuz9E=w240-h480-rw',
        description: 'Descrição do Uber',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.ubercab&hl=pt_PT',
        appStoreLink: 'https://apps.apple.com/pt/app/uber-pe%C3%A7a-uma-viagem/id368677368',
      },
      {
        name: 'Glovo',
        category: 'Delivery',
        icon: 'https://play-lh.googleusercontent.com/iTpx7rDQGJQd4dHVwhsKmSpQv72zyJ6M4df8smHO7rGCOJUKeKZtynrft0NWlnf47w=w240-h480-rw',
        description: 'Descrição do Glovo',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.glovo&hl=pt_PT',
        appStoreLink: 'https://apps.apple.com/pt/app/glovo-entrega-de-comida-e-mais/id951812684',
      },
    ];

    // Função para carregar os dados de teste na subcoleção `appSugeridos`
    const loadTestData = async () => {
      loading.value = true;
      try {
        for (const app of testData) {
          await createData('appSugeridos', app); // Usa a função genérica para inserir em `appSugeridos`
        }
        successMessage.value = 'Dados carregados com sucesso!';
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      loadTestData,
      loading,
      successMessage,
    };
  },
};
</script>
