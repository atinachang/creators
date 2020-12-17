import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-EsRu6rdGGPeAVHvyUP7Utapyhr4z-JQ",
  authDomain: "freelance-75ff6.firebaseapp.com",
  databaseURL: "https://freelance-75ff6.firebaseio.com",
  projectId: "freelance-75ff6",
  storageBucket: "freelance-75ff6.appspot.com",
  messagingSenderId: "255923270640",
  appId: "1:255923270640:web:395dc411429d7dc5976335",
  measurementId: "G-974L22GJSE"
};
  firebase.initializeApp(firebaseConfig);
	firebase.firestore().settings({timestampsInSnapshots: true})


	export default firebase;