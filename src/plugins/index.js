import vuetify from './vuetify';
import { loadFonts } from './webfontloader';
import router from '../router';
import { createPinia } from 'pinia';
export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify); // Registra o Vuetify como plugin
	app.use(router); // Registra o router como plugin
  app.use(createPinia()); // Registra o Pinia como plugin
	app.config.globalProperties.$vuetify = vuetify; // Adiciona Vuetify ao escopo global da aplicação 
}