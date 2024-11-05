
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import {  mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';
import { customSvgs } from './customSvgs';

// Configuração de tema
const theme = {
  defaultTheme: 'light', // Pode ser 'light' ou 'dark'
  themes: {
    light: {
      colors: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
    dark: {
      colors: {
        primary: '#1E88E5',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
};

// Configuração de ícones
const icons = {
  defaultSet: 'mdi', // Conjunto de ícones padrão
  aliases: {
    ...customSvgs, // Adiciona ícones personalizados
  },
  sets: {
    mdi, // Conjunto do Material Design Icons
    nav: customSvgs, // Conjunto personalizado
  },
};

// Cria e exporta a instância do Vuetify com as configurações
export default createVuetify({
  components,
  directives,
  theme,
  icons,
});
