<template>
  <div id="main-menu">

    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawerUserMenu" location="right" temporary>
          <v-list-item v-if="user" :prepend-avatar="user.photoURL || avatar" :title="user.displayName || 'Usuário'"
            class="mt-10 py-4">
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" @click="navigateTo('/')">
            Home
          </v-list-item>
          <v-list-item v-if="!user" prepend-icon="mdi-login" title="Login" @click="navigateTo('/login')">
            Login
          </v-list-item>
          <v-list-item v-if="user" prepend-icon="mdi-logout" title="Logout" @click="navigateTo('/logout')">
            Logout
          </v-list-item>

        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <v-btn id="topMenu" color="green" :icon="drawerUserMenu ? 'mdi-close' : 'mdi-menu'"
      @click.stop="drawerUserMenu = !drawerUserMenu">
    </v-btn>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';

const router = useRouter();
const { user } = useAuth();
const drawerUserMenu = ref(null);

//Perfil do usuário
const avatar = ref('https://randomuser.me/api/portraits/men/78.jpg');


const navigateTo = (path) => {
  router.push(path);
};

onMounted(() => {

  console.log('UserMenu mounted');
});
</script>

<style>
#topMenu {
  position: absolute;
  top: 6px;
  right: 6px;
}

#main-menu {
  z-index: 99999;
}
</style>