import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: proccess.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: proccess.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: proccess.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: proccess.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: proccess.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: proccess.env.REACT_APP_FIREBASE_APP_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  export default db