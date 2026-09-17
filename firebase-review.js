import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDf1rwpCyYR95kviTifDe_eAVdrATu5VTE",
  authDomain: "class8-learning-hub.firebaseapp.com",
  projectId: "class8-learning-hub",
  storageBucket: "class8-learning-hub.firebasestorage.app",
  messagingSenderId: "273341972526",
  appId: "1:273341972526:web:21396d1fad7a17f2f7dfbf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

signInAnonymously(auth)
  .then(function() {
    console.log("Firebase Anonymous Login Connected");
  })
  .catch(function(error) {
    console.error("Firebase Login Error:", error);
  });

export { app, auth, db };
