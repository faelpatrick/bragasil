<template>
	<div class="mb-10">
		<h1>Login</h1>
		<form @submit.prevent="loginWithEmail">
			<div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
		<button @click="loginWithGoogle">Login with Google</button>
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
  align-items: center;
  justify-content: center;
  height: 100vh;
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
