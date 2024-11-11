<template>
  <div class="login-container d-flex justify-center align-center">
  <div v-if="loggedIn" class="text-center w-5 ma-4">
    <div class="d-flex flex-row ">
      <h1 class="">Olá, {{ userData?.email }}</h1>
    </div>
    <p>Seja bem-vindo ao nosso site!</p>
    <v-btn color="red" @click="logout">Logout</v-btn>
  </div>
	<div class="login-container" v-if="!loggedIn">
		<h1>Login</h1>
    <v-form @submit.prevent="loginWithEmail">
    <v-text-field
      label="Email"
      v-model="userData.email"
      type="email"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="userData.password"
      type="password"
      required
    ></v-text-field>
    <v-btn type="submit" color="">Login</v-btn>
  </v-form>
    <p v-if="error">{{ error }}</p>
		<v-btn class="mt-4" @click="loginWithGoogle">Login with Google</v-btn>
	</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
import { onAuthStateChanged } from 'firebase/auth'; 
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const loggedIn = ref(false);

const logout = async () => {
router.push('/logout'); 
};

const userData = ref({
  nome: '',
  email: '',
  password: '',
});
const router = useRouter();

// Login com email e senha
const loginWithEmail = async () => {
	try {
		await signInWithEmailAndPassword(auth, userData.value.email, userData.value.password);
		router.push('/'); // Redireciona após o login bem-sucedido
	} catch (error) {
		console.error("Erro ao fazer login com email e senha:", error);
	}
};

// Login com Google
const loginWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
		router.push('/'); // Redireciona após o login bem-sucedido
	} catch (error) {
		console.error("Erro ao fazer login com Google:", error);
	}
};

onMounted(() => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true; // Usuário está autenticado
      userData.value.email = user.email;
      userData.value.email = user.email.trim();
    } else {
      loggedIn.value = false; // Usuário não está autenticado
      console.log("Nenhum usuário autenticado.");
    }
  });

});

</script>

<style scoped>
h1 {
	color: green;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 400px;
  margin: auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
