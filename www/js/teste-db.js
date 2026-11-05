import { db } from './database.js';
import { collection, addDoc } from "firebase/firestore";

async function testarEscritaCordova() {
  try {
    const docRef = await addDoc(collection(db, "testes"), {
      mensagem: "Teste vindo do VS Code!",
      data: new Date()
    });
    console.log("Documento adicionado com ID: ", docRef.id);
    alert("Sucesso! O Cordova já consegue escrever no Firestore.");
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
}

testarEscritaCordova();