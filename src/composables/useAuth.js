// src/composables/useAuth.js
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/plugins/firebase'; // Certifique-se de que o Firebase está configurado corretamente

const user = ref(null);

export function useAuth() {
  const fetchUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        user.value = {
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          email: currentUser.email,
        };
      } else {
        user.value = null;
      }
    });
  };

  onMounted(fetchUser);

  return { user };
}
