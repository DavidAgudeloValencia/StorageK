import firebase from "firebase/app";
//import firestore from "firebase/firebase-firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWFQSCx58URf29qpYu6hoRDamQUbdloE8",
  authDomain: "storage-k.firebaseapp.com",
  databaseURL: "https://storage-k.firebaseio.com",
  projectId: "storage-k",
  storageBucket: "storage-k.appspot.com",
  messagingSenderId: "317699664854",
  appId: "1:317699664854:web:5a7581a575b9d00b489277",
  measurementId: "G-72PWNQQEF0",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({ timestampsInSnapShots: true });

export default firebaseApp;
