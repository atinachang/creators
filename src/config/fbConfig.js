import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyD-EsRu6rdGGPeAVHvyUP7Utapyhr4z-JQ",
  authDomain: "freelance-75ff6.firebaseapp.com",
  databaseURL: "https://freelance-75ff6.firebaseio.com",
  projectId: "freelance-75ff6",
  storageBucket: "freelance-75ff6.appspot.com",
  messagingSenderId: "255923270640",
  appId: "1:255923270640:web:395dc411429d7dc5976335",
  measurementId: "G-974L22GJSE"
};
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})
  
  const storage = firebase.storage()

	export {storage, config, firebase as default}