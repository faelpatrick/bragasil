// src/plugins/index.js
import vuetify from './vuetify';
import { loadFonts } from './webfontloader';
import router from '../router';
import { createPinia } from 'pinia';
import { appFirebase, analytics, firestore, auth } from './firebase';

export function registerPlugins(app) {
  loadFonts();
  
  app.use(vuetify) // Registra o Vuetify para ser acessível globalmente
     .use(router)
     .use(createPinia());

  // Adiciona o Firebase ao escopo global, se necessário
  app.config.globalProperties.$firebase = { appFirebase, analytics, firestore, auth };
	// app.config.globalProperties.$vuetify = vuetify; // Add Vuetify ao escopo global
}