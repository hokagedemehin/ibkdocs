import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA7S3_V3BuvIw87OCsFdex2ntze6T_fXdQ",
    authDomain: "ibk-docs.firebaseapp.com",
    projectId: "ibk-docs",
    storageBucket: "ibk-docs.appspot.com",
    messagingSenderId: "272890431625",
    appId: "1:272890431625:web:8fb79d6d373cf471f21e58"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export { db };