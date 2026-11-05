import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Configuração real do teu projeto Firebase[cite: 11]
const firebaseConfig = {
  apiKey: "AIzaSyAmRFDRbZFEKL_yg-aF-e-ReCRPPsLTVRg",
  authDomain: "vitalhour---base-de-dados.firebaseapp.com",
  projectId: "vitalhour---base-de-dados",
  storageBucket: "vitalhour---base-de-dados.appspot.com",
  messagingSenderId: "687051362748",
  appId: "1:687051362748:web:283af0afa3fa38bd23c1bb9",
  measurementId: "G-LTVPJTJNTK"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Funções de Autenticação
export function fazerLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login efetuado com sucesso:", userCredential.user.email);
      alert("Login efetuado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro no login:", error.message);
      alert("Erro no login: " + error.message);
    });
}

export function registarUtilizador(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Utilizador criado:", userCredential.user.email);
    })
    .catch((error) => {
      console.error("Erro ao registar:", error.message);
    });
}

export { db };