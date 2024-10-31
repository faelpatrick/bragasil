import vuetify from './vuetify';
import { loadFonts } from './webfontloader';
import router from '../router';
import { createPinia } from 'pinia';
import { appFirebase, analytics, firestore, auth } from './firebase';
export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify); // Registra o Vuetify como plugin
	app.use(router); // Registra o router como plugin
  app.use(createPinia()); // Registra o Pinia como plugin
  app.config.globalProperties.$firebase = { appFirebase, analytics, firestore, auth }; // Add Firebase ao escopo global
	app.config.globalProperties.$vuetify = vuetify; // Add Vuetify ao escopo global
}