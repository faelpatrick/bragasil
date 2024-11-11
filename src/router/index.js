import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from '@/plugins/firebase'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/login/LoginFirebase.vue'
import Logout from '@/views/login/LogoutFirebase.vue'
import Testes from '@/views/testes/PaginaTestes.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/testes',
      name: 'testes',
      component: Testes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    ,
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
});


const adminMail = import.meta.env.VUE_APP_ADMIN_EMAIL;
console.log('Admin Email:', adminMail);

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    onAuthStateChanged(auth, (user) => {
      console.log('Usuário:', auth);
  
      if (user && user.email === adminMail) {
        next();
      } else {
        alert("Acesso negado. Faça login com o usuário autorizado.");
        next({ path: '/login' }); // Substitua '/login' pelo caminho da sua página de login
      }
    });
  } else {
    next(); // Se a rota não requer autenticação, permite o acesso
}
});

export default router
