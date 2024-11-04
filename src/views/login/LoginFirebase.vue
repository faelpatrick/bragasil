<template>
	<div class="login-container">
		<h1>Login</h1>
    <v-form @submit.prevent="loginWithEmail">
    <v-text-field
      label="Email"
      v-model="email"
      type="email"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      required
    ></v-text-field>
    <v-btn type="submit" color="">Login</v-btn>
  </v-form>
    <p v-if="error">{{ error }}</p>
		<v-btn class="mt-4" @click="loginWithGoogle">Login with Google</v-btn>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const email = ref('');
const password = ref('');
const router = useRouter();

// Login com email e senha
const loginWithEmail = async () => {
	try {
		await signInWithEmailAndPassword(auth, email.value, password.value);
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
