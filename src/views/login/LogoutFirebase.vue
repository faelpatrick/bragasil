<script setup>
// logout firebase
import { useRouter } from 'vue-router';
import { auth } from '@/plugins/firebase'; // Importa a instância de autenticação do Firebase
import { signOut } from 'firebase/auth';

const router = useRouter();

const logout = async () => {
	try {
		await signOut(auth);
		router.push('/login'); // Redireciona após o logout bem-sucedido
	} catch (error) {
		console.error("Erro ao fazer logout:", error);
	}
};

logout();


</script>