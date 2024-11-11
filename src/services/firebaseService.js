import { firestore } from '@/plugins/firebase';
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

// Função para obter a referência de uma coleção específica
const getCollectionRef = (collectionName) => {
  return collection(firestore, collectionName);
};

// Função para criar (inserir) dados em uma coleção
export const createData = async (collectionName, data) => {
  const collectionRef = getCollectionRef(collectionName);
  try {
    await addDoc(collectionRef, data);
    console.log(`Dados inseridos com sucesso em ${collectionName}`);
  } catch (error) {
    console.error(`Erro ao inserir dados em ${collectionName}:`, error);
  }
};

// Função para ler dados de uma coleção
export const readData = async (collectionName) => {
  const collectionRef = getCollectionRef(collectionName);
  const items = [];
  try {
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error(`Erro ao ler dados de ${collectionName}:`, error);
  }
  return items;
};

// Função para atualizar dados em uma coleção
export const updateData = async (collectionName, docId, newData) => {
  const docRef = doc(firestore, collectionName, docId);
  try {
    await updateDoc(docRef, newData);
    console.log(`Dados atualizados com sucesso em ${collectionName}`);
  } catch (error) {
    console.error(`Erro ao atualizar dados em ${collectionName}:`, error);
  }
};

// Função para deletar dados de uma coleção
export const deleteData = async (collectionName, docId) => {
  const docRef = doc(firestore, collectionName, docId);
  try {
    await deleteDoc(docRef);
    console.log(`Dados deletados com sucesso de ${collectionName}`);
  } catch (error) {
    console.error(`Erro ao deletar dados de ${collectionName}:`, error);
  }
};
