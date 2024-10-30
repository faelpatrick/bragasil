// src/plugins/vuetify.js
// import DefaultTheme from 'vitepress/theme'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const defaultTheme = {
	defaultTheme: 'light', // Pode ser 'light' ou 'dark'
	themes: {
		light: {
			colors: {
				primary: '#1976D2', // Azul padrão do Vuetify
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
				primary: '#1E88E5', // Personalize as cores do tema escuro
				secondary: '#424242',
				accent: '#FF4081',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FB8C00',
			},
		},
	},
}

const vuetify = createVuetify({ components, directives, defaultTheme })

export default {
  // ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify)
  },
}

